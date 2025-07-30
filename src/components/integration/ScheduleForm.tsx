import React, { forwardRef, useImperativeHandle, useState, useEffect } from 'react';
import Dropdown from '../ui/Dropdown';
import Input from '../ui/Input';
import Button from '../ui/Button';
import { AiOutlinePlus, AiOutlineDelete, AiOutlineDown, AiOutlineUp } from 'react-icons/ai';
import { ProcessSchedules, Schedule } from  '../../service';;

export type ScheduleFormRef = {
  validateAndSubmit: () => ProcessSchedules | null;
};

interface ScheduleFormProps {
  defaultSchedule?: ProcessSchedules | null;
  environmentId: string;
  integrationPackInstanceId: string;
}

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const dayToBoomiNumber: Record<string, string> = {
  Sunday: '1',
  Monday: '2',
  Tuesday: '3',
  Wednesday: '4',
  Thursday: '5',
  Friday: '6',
  Saturday: '7',
};

const scheduleTypes: { id: string; name: string }[] = [
  { id: 'minutes', name: 'Minutes' },
  { id: 'hour', name: 'Hour' },
  { id: 'day', name: 'Day' },
  { id: 'advanced', name: 'Advanced' },
];

type ScheduleUIState = {
  type: string;
  selectedDays: string[];
  interval: number;
  startHour: string;
  startMinute: string;
  endHour: string;
  endMinute: string;
};

const defaultUIState = (): ScheduleUIState => ({
  type: 'day',
  selectedDays: [],
  interval: 15,
  startHour: '08',
  startMinute: '00',
  endHour: '18',
  endMinute: '59',
});

const ScheduleForm = forwardRef<ScheduleFormRef, ScheduleFormProps>(
  ({ defaultSchedule, environmentId, integrationPackInstanceId }, ref) => {

    const [schedules, setSchedules] = useState<Schedule[]>(
      defaultSchedule?.Schedule?.length
        ? defaultSchedule.Schedule
        : [{
            minutes: '*',
            hours: '*',
            daysOfWeek: '*',
            daysOfMonth: '*',
            months: '*',
            years: '*',
          }]
    );
    const parseScheduleToUIState = (sched: Schedule): ScheduleUIState => {
      const isAdvanced = !(
        sched.minutes?.startsWith('0-59/') &&
        sched.hours?.includes('-') &&
        (sched.daysOfWeek === '*' || sched.daysOfWeek?.includes(','))
      );

      if (isAdvanced) {
        return {
          type: 'advanced',
          selectedDays: [],
          interval: 15,
          startHour: '08',
          startMinute: '00',
          endHour: '18',
          endMinute: '59',
        };
      }

      const interval = parseInt(sched.minutes?.split('/')[1] ?? '15', 10);
      const [startHour = '08', endHour = '18'] = sched.hours?.split('-') ?? [];
      const selectedDays = (sched.daysOfWeek?.split(',') ?? [])
        .map(num => Object.keys(dayToBoomiNumber).find(day => dayToBoomiNumber[day] === num))
        .filter((d): d is string => !!d);

      return {
        type: 'day', 
        selectedDays,
        interval,
        startHour: startHour.padStart(2, '0'),
        startMinute: '00', 
        endHour: endHour.padStart(2, '0'),
        endMinute: '59',
      };
    };
    const [uiStates, setUiStates] = useState<ScheduleUIState[]>(
      schedules.map(parseScheduleToUIState)
    );
    const [openIndex, setOpenIndex] = useState(0);

    const isValidCronField = (value: string, min: number, max: number) =>
      value.split(',').every(v => {
        if (v.trim() === '*') return true;
        const num = parseInt(v.trim(), 10);
        return !isNaN(num) && num >= min && num <= max;
      });

    const handleDropdownChange = (index: number, selected: { id: string }) => {
      const updatedStates = [...uiStates];
      updatedStates[index].type = selected.id;
      setUiStates(updatedStates);

      // Update advanced values from UI state
      if (selected.id === 'advanced') {
        const ui = updatedStates[index];
        const mins = `0-59/${ui.interval}`;
        const hrs = `${ui.startHour}-${ui.endHour}`;
        const days = ui.selectedDays.map(day => dayToBoomiNumber[day]).join(',') || '*';

        updateSchedule(index, {
          minutes: mins,
          hours: hrs,
          daysOfWeek: days,
        });
      }
    };

    const updateSchedule = (index: number, updates: Partial<Schedule>) => {
      const updated = [...schedules];
      updated[index] = { ...updated[index], ...updates };
      setSchedules(updated);
    };

    const handleAddSchedule = () => {
      setSchedules(prev => [
        ...prev,
        {
          minutes: '*',
          hours: '*',
          daysOfWeek: '*',
          daysOfMonth: '*',
          months: '*',
          years: '*',
        },
      ]);
      setUiStates(prev => [...prev, defaultUIState()]);
      setOpenIndex(schedules.length);
    };

    const handleDeleteSchedule = (index: number) => {
      setSchedules(prev => prev.filter((_, i) => i !== index));
      setUiStates(prev => prev.filter((_, i) => i !== index));
      setOpenIndex(0);
    };

    const toggleDay = (index: number, day: string) => {
      const updatedStates = [...uiStates];
      const selected = updatedStates[index].selectedDays;
      updatedStates[index].selectedDays = selected.includes(day)
        ? selected.filter(d => d !== day)
        : [...selected, day];
      setUiStates(updatedStates);
    };

    const handleUiInputChange = (index: number, field: keyof ScheduleUIState, value: string | number) => {
      const updatedStates = [...uiStates];
      (updatedStates[index][field] as any) = value;
      setUiStates(updatedStates);
    };

    useImperativeHandle(ref, () => ({
      validateAndSubmit: () => {
        const resultSchedules = schedules.map((sched, i) => {
          const ui = uiStates[i];
          if (ui.type === 'advanced') {
            return sched;
          } else {
            return {
              minutes: `0-59/${ui.interval}`,
              hours: `${ui.startHour}-${ui.endHour}`,
              daysOfWeek: ui.selectedDays.map(day => dayToBoomiNumber[day]).join(',') || '*',
              daysOfMonth: '*',
              months: '*',
              years: '*',
            };
          }
        });

        return {
          ...defaultSchedule,
          atomId: environmentId,
          processId: defaultSchedule?.processId ?? '',
          Schedule: resultSchedules,
        };
      },
    }));

    return (
      <div className="space-y-4 p-4">
        <div className="flex justify-end">
          <Button
            toggle={false}
            primary={false}
            label="Add"
            icon={<AiOutlinePlus className="w-4 h-4" />}
            onClick={handleAddSchedule}
          />
        </div>

        {schedules.map((sched, index) => {
          const isOpen = openIndex === index;
          const ui = uiStates[index];
          const isAdvanced = ui.type === 'advanced';
          const isDay = ui.type === 'day';
          const isHour = ui.type === 'hour';
          const isMinutes = ui.type === 'minutes';

          return (
            <div key={index} className="border rounded shadow-sm">
              <div
                className="flex justify-between items-center px-4 py-2 bg-gray-100 cursor-pointer"
                onClick={() => setOpenIndex(prev => (prev === index ? -1 : index))}
              >
                <span className="font-semibold">Schedule #{index + 1} ({ui.type})</span>
                <div className="flex items-center gap-3">
                  <button onClick={(e) => { e.stopPropagation(); handleDeleteSchedule(index); }}>
                    <AiOutlineDelete className="text-red-500 hover:text-red-700" />
                  </button>
                  {isOpen ? <AiOutlineUp /> : <AiOutlineDown />}
                </div>
              </div>

              {isOpen && (
                <div className="p-4 space-y-4">
                  <Dropdown
                    formName={`dropdown-${index}`}
                    inputName="scheduleType"
                    label="Schedule Type"
                    required
                    options={scheduleTypes}
                    selected={scheduleTypes.find(st => st.id === ui.type)!}
                    onChange={(val) => handleDropdownChange(index, val)}
                  />

                  {!isAdvanced && (
                    <>
                      <div className="flex gap-2">
                        <label className="block font-medium">Start Time</label>
                        <select className="border rounded px-2 py-1" value={ui.startHour} onChange={(e) => handleUiInputChange(index, 'startHour', e.target.value)}>
                          {Array.from({ length: 24 }, (_, i) => (
                            <option key={i} value={String(i).padStart(2, '0')}>{String(i).padStart(2, '0')}</option>
                          ))}
                        </select>
                        <select
                          className={`border rounded px-2 py-1 ${isMinutes ? 'bg-gray-300 text-gray-600 cursor-not-allowed' : ''}`}
                          value={ui.startMinute}
                          disabled={isMinutes}
                          onChange={(e) => handleUiInputChange(index, 'startMinute', e.target.value)}
                        >
                          {Array.from({ length: 60 }, (_, i) => (
                            <option key={i} value={String(i).padStart(2, '0')}>{String(i).padStart(2, '0')}</option>
                          ))}
                        </select>
                      </div>

                      {!isDay && (
                        <div className="flex gap-2">
                          <label className="block font-medium">End Time</label>
                          <select className="border rounded px-2 py-1" value={ui.endHour} onChange={(e) => handleUiInputChange(index, 'endHour', e.target.value)}>
                            {Array.from({ length: 24 }, (_, i) => (
                              <option key={i} value={String(i).padStart(2, '0')}>{String(i).padStart(2, '0')}</option>
                            ))}
                          </select>
                          <select
                            className={`border rounded px-2 py-1 ${isMinutes || isHour ? 'bg-gray-300 text-gray-600 cursor-not-allowed' : ''}`}
                            value={ui.endMinute}
                            disabled={isMinutes || isHour}
                            onChange={(e) => handleUiInputChange(index, 'endMinute', e.target.value)}
                          >
                            {Array.from({ length: 60 }, (_, i) => (
                              <option key={i} value={String(i).padStart(2, '0')}>{String(i).padStart(2, '0')}</option>
                            ))}
                          </select>
                        </div>
                      )}

                      <div>
                        <label className="block font-medium">Interval (mins)</label>
                        <input
                          type="number"
                          min={1}
                          max={59}
                          className="w-24 border rounded px-2 py-1"
                          value={ui.interval}
                          onChange={(e) => handleUiInputChange(index, 'interval', Number(e.target.value))}
                        />
                      </div>

                      <div>
                        <p className="font-medium">Select Day(s) to Run</p>
                        <div className="flex flex-wrap gap-4 mt-2">
                          {days.map(day => (
                            <label key={day} className="flex items-center gap-1">
                              <input
                                type="checkbox"
                                checked={ui.selectedDays.includes(day)}
                                onChange={() => toggleDay(index, day)}
                              />
                              {day}
                            </label>
                          ))}
                        </div>
                      </div>
                    </>
                  )}

                  {isAdvanced && (
                    <div className="grid grid-cols-1 gap-4">
                      {(['minutes', 'hours', 'daysOfWeek', 'daysOfMonth', 'months', 'years'] as (keyof Schedule)[]).map(field => (
                        <Input
                          key={field}
                          formName={`advanced-${index}`}
                          label={field}
                          inputName={field}
                          value={sched[field] ?? ''}
                          onChange={(e) => updateSchedule(index, { [field]: e.target.value })}
                          readOnly={false}
                          required={true}
                        />
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  }
);

export default ScheduleForm;

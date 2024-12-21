import React, { useState } from 'react';

interface Props {
  onClose: () => void;
}

type Reason = 'completed' | 'interrupted' | 'others' | '';
type InterruptedReason = "student didn't show up" | 'disconnected' | 'others' | '';

const EndClassModal: React.FC<Props> = ({ onClose }) => {
  const [reason, setReason] = useState<Reason>('');
  const [interruptedReason, setInterruptedReason] = useState<InterruptedReason>('');
  const [otherReason, setOtherReason] = useState('');

  const handleEndClass = () => {
    console.log('Reason:', reason, 'Sub-reason:', interruptedReason, 'Other Reason:', otherReason);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-md w-96 max-h-screen overflow-y-auto">
        <h2 className="text-lg font-bold mb-4">End Class</h2>
        <div>
          {/* Class Completed */}
          <label className="block mb-2">
            <input
              type="radio"
              name="reason"
              value="completed"
              checked={reason === 'completed'}
              onChange={() => {
                setReason('completed');
                setInterruptedReason(''); 
                setOtherReason(''); 
              }}
              className="mr-2 appearance-none w-4 h-4 border border-gray-300 rounded-full checked:bg-orange-500 checked:border-orange-500"
            />
            Class Completed
          </label>

          {/* Class Interrupted */}
          <label className="block mb-2">
            <input
              type="radio"
              name="reason"
              value="interrupted"
              checked={reason === 'interrupted'}
              onChange={() => setReason('interrupted')}
              className="mr-2 appearance-none w-4 h-4 border border-gray-300 rounded-full checked:bg-orange-500 checked:border-orange-500"
            />
            Class Interrupted
          </label>
          {reason === 'interrupted' && (
            <div className="ml-6 mt-2">
              <label className="block">
                <input
                  type="radio"
                  name="interruptedReason"
                  value="student didn't show up"
                  checked={interruptedReason === "student didn't show up"}
                  onChange={() => setInterruptedReason("student didn't show up")}
                  className="mr-2 appearance-none w-3 h-3 border border-gray-300 rounded-full checked:bg-orange-500 checked:border-orange-500"
                />
                Student didn't show up
              </label>
              <label className="block mt-2">
                <input
                  type="radio"
                  name="interruptedReason"
                  value="disconnected"
                  checked={interruptedReason === 'disconnected'}
                  onChange={() => setInterruptedReason('disconnected')}
                  className="mr-2 appearance-none w-3 h-3 border border-gray-300 rounded-full checked:bg-orange-500 checked:border-orange-500"
                />
                I got disconnected
              </label>
              <label className="block mt-2">
                <input
                  type="radio"
                  name="interruptedReason"
                  value="others"
                  checked={interruptedReason === 'others'}
                  onChange={() => setInterruptedReason('others')}
                  className="mr-2 appearance-none w-3 h-3 border border-gray-300 rounded-full checked:bg-orange-500 checked:border-orange-500"
                />
                Others
              </label>
              {interruptedReason === 'others' && (
                <textarea
                  placeholder="Specify reason"
                  className="block w-full border rounded px-2 py-1 mt-2"
                  onChange={(e) => setOtherReason(e.target.value)}
                  value={otherReason}
                />
              )}
            </div>
          )}
        </div>

        <div className="flex justify-end mt-4 space-x-2">
          <button className="bg-gray-300 px-4 py-2 rounded" onClick={onClose}>
            Cancel
          </button>
          <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={handleEndClass}>
            End Class
          </button>
        </div>
      </div>
    </div>
  );
};

export default EndClassModal;

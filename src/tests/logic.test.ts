import {sendTemperatureSensation} from "../Remocon";
import {sendPostNumber} from "../Settings";

test('sendTemperatureSensation(0)', () => {
    return sendTemperatureSensation(0).then(data => {
      expect(data).toBe("");
    })
});


test('sendPostNumber("029-0202")', () => {
  return sendPostNumber("029-0202").then(data => {
    expect(data).toBe("");
  })
});
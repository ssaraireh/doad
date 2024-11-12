let channelDef = [
    { type: 'other' },
    { type: 'repeater', /* other properties */ },
    { type: 'something else' }
];

let newRepeater = { type: 'repeater', /* new properties */ };

let updatedChannelDef = replaceRepeaterInChannelDef(channelDef, newRepeater);
console.log(updatedChannelDef);

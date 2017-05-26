var quizQuestions = [
  {
      question: encodeURI(`<h3>What will be in the console after executing the following code?</h3>
      <div>
        <code>
          var foo = { bar: 'test' };<br>
          console.log(foo && foo.bar);
        </code>
      </div>`),
      answers: [
          {
              type: "Correct",
              content: "test"
          },
          {
              type: "Incorrect",
              content: "true"
          },
          {
              type: "Incorrect",
              content: "{bar: 'test'}"
          },
          {
              type: "Incorrect",
              content: "other"
          }
      ]
  },
  {
      question: "<h3>Which method outputs a new array with values matching the specified condition?</h3>",
      answers: [
          {
              type: "Correct",
              content: "Array.prototype.filter()"
          },
          {
              type: "Incorrect",
              content: "Array.prototype.every()"
          },
          {
              type: "Incorrect",
              content: "Array.prototype.some()"
          },
          {
              type: "Incorrect",
              content: "Array.prototype.map()"
          },
          {
              type: "Incorrect",
              content: "Array.prototype.reduce()"
          },
          {
              type: "Incorrect",
              content: "Array.prototype.reduceRight()"
          }
      ]
  },
  {
      question: "<h3>Choose the way to get object keys:</h3>",
      answers: [
          {
              type: "Correct",
              content: "Object.keys()"
          },
          {
              type: "Incorrect",
              content: "Array.getKeys()"
          },
          {
              type: "Incorrect",
              content: "Array.prototype.keys()"
          },
          {
              type: "Incorrect",
              content: "Object.prototype.getKeys()"
          },
          {
              type: "Incorrect",
              content: "None of these"
          }
      ]
  },
  {
      question: "<h3>Can object accessors have the same name with other property?</h3>",
      answers: [
          {
              type: "Correct",
              content: "No"
          },
          {
              type: "Incorrect",
              content: "Yes"
          }
      ]
  },
  {
      question: "<h3>Is it possible to bind an event handler throughout an HTML attribute?</h3>",
      answers: [
          {
              type: "Correct",
              content: "Yes, it is"
          },
          {
              type: "Incorrect",
              content: "No, it is not"
          }
      ]
  },
  {
      question: "<h3>What value does a declared variable have (e.g. var a;)?</h3>",
      answers: [
          {
              type: "Correct",
              content: "undefined"
          },
          {
              type: "Incorrect",
              content: "null"
          },
          {
              type: "Incorrect",
              content: "''"
          },
          {
              type: "Incorrect",
              content: "empty"
          },
          {
              type: "Incorrect",
              content: "var"
          }
      ]
  },
  {
      question: "<h3>What node is the root of DOM?</h3>",
      answers: [
          {
              type: "Correct",
              content: "document"
          },
          {
              type: "Incorrect",
              content: "window"
          },
          {
              type: "Incorrect",
              content: "html"
          },
          {
              type: "Incorrect",
              content: "head"
          },
          {
              type: "Incorrect",
              content: "body"
          }
      ]
  },
  {
      question: "<h3>Does raw JavaScript support multi-threading?</h3>",
      answers: [
          {
              type: "Correct",
              content: "No"
          },
          {
              type: "Incorrect",
              content: "Yes"
          }
      ]
  },
  {
      question: "<h3>Which method outputs a new array by modifying values of the previous array?</h3>",
      answers: [
          {
              type: "Correct",
              content: "Array.prototype.map()"
          },
          {
              type: "Incorrect",
              content: "Array.prototype.every()"
          },
          {
              type: "Incorrect",
              content: "Array.prototype.some()"
          },
          {
              type: "Incorrect",
              content: "Array.prototype.filter()"
          },
          {
              type: "Incorrect",
              content: "Array.prototype.reduce()"
          },
          {
              type: "Incorrect",
              content: "Array.prototype.reduceRight()"
          }
      ]
  },
  {
      question: encodeURI(`<h3>Which event handlers will be called upon clicking on 'div'?</h3>
      <div>
        <code>
          div.onclick = function() { alert(1); }<br>
          div.onclick = function() { alert(2); }
        </code>
      </div>`),
      answers: [
          {
              type: "Correct",
              content: "Only second"
          },
          {
              type: "Incorrect",
              content: "Only first"
          },
          {
              type: "Incorrect",
              content: "Both"
          }
      ]
  },
  {
      question: "<h3>In JavaScript, are objects passed by reference or by value?</h3>",
      answers: [
          {
              type: "Correct",
              content: "By reference"
          },
          {
              type: "Incorrect",
              content: "By value"
          }
      ]
  },
  {
      question: "<h3>Select correct variable declaration:</h3>",
      answers: [
          {
              type: "Correct",
              content: "var __global;"
          },
          {
              type: "Incorrect",
              content: "var import;"
          },
          {
              type: "Incorrect",
              content: "var super;"
          },
          {
              type: "Incorrect",
              content: "var 15chars;"
          }
      ]
  },
  {
      question: "<h3>What thing is the main ancestor for all objects?</h3>",
      answers: [
          {
              type: "Correct",
              content: "null"
          },
          {
              type: "Incorrect",
              content: "Array"
          },
          {
              type: "Incorrect",
              content: "Boolean"
          },
          {
              type: "Incorrect",
              content: "undefined"
          },
          {
              type: "Incorrect",
              content: "Object"
          },
          {
              type: "Incorrect",
              content: "no correct answer"
          }
      ]
  },
  {
      question: encodeURI(`<h3>What will be the output of the following code?</h3>
      <div>
        <code>
          var a = 1; if (true) {var a = 2; console.log(a);} console.log(a);
        </code>
      </div>`),
      answers: [
          {
              type: "Correct",
              content: "2, 2"
          },
          {
              type: "Incorrect",
              content: "1, 2"
          },
          {
              type: "Incorrect",
              content: "2, 1"
          },
          {
              type: "Incorrect",
              content: "other"
          },
          {
              type: "Incorrect",
              content: "error"
          }
      ]
  },
  {
      question: "<h3>Which method returns a new function from the delivered one?</h3>",
      answers: [
          {
              type: "Correct",
              content: "Function.prototype.bind()"
          },
          {
              type: "Incorrect",
              content: "Function.prototype.call()"
          },
          {
              type: "Incorrect",
              content: "Function.prototype.apply()"
          },
          {
              type: "Incorrect",
              content: "Function.prototype.add()"
          },
          {
              type: "Incorrect",
              content: "All of these"
          }
      ]
  },
  {
      question: "<h3>Which are valid constructions for showing a message 5s after a script has loaded?</h3>",
      answers: [
          {
              type: "Correct",
              content: "setTimeout(function() { alert('Hello') }, 5000)"
          },
          {
              type: "Incorrect",
              content: "sleep(5); alert('Hello');"
          },
          {
              type: "Incorrect",
              content: "sleep(5000); alert('Hello');"
          },
          {
              type: "Incorrect",
              content: "setTimeout('alert('Hello')', 5000);"
          },
          {
              type: "Incorrect",
              content: "setTimeout(function() { alert('Hello') }, 5)"
          }
      ]
  },
  {
      question: "<h3>Which methods use an array of params?</h3>",
      answers: [
          {
              type: "Correct",
              content: "Function.prototype.apply()"
          },
          {
              type: "Incorrect",
              content: "Function.prototype.call()"
          },
          {
              type: "Incorrect",
              content: "Function.prototype.bind()"
          },
          {
              type: "Incorrect",
              content: "Function.prototype.add()"
          },
          {
              type: "Incorrect",
              content: "None of these"
          }
      ]
  },
  {
      question: encodeURI(`<h3>Is it true that a == b?</h3>
      <div>
        <code>
          a = new Array(1, 2, 3);<br>
          b = new Array(1, 2, 3);
        </code>
      </div>`),
      answers: [
          {
              type: "Correct",
              content: "no, it is false"
          },
          {
              type: "Incorrect",
              content: "yes, it is true"
          }
      ]
  },
  {
      question: "<h3>Choose the way to lock an object from being changed and modified</h3>",
      answers: [
          {
              type: "Correct",
              content: "Object.preventExtensions()"
          },
          {
              type: "Incorrect",
              content: "Object.const"
          },
          {
              type: "Incorrect",
              content: "Object.freezy"
          },
          {
              type: "Incorrect",
              content: "Object.setSeal"
          },
          {
              type: "Incorrect",
              content: "Object.extensions()"
          }
      ]
  },
  {
      question: "<h3>Which method accumulates values of array items from the first to the last?</h3>",
      answers: [
          {
              type: "Correct",
              content: "Array.prototype.reduce()"
          },
          {
              type: "Incorrect",
              content: "Array.prototype.every()"
          },
          {
              type: "Incorrect",
              content: "Array.prototype.some()"
          },
          {
              type: "Incorrect",
              content: "Array.prototype.filter()"
          },
          {
              type: "Incorrect",
              content: "Array.prototype.map()"
          },
          {
              type: "Incorrect",
              content: "Array.prototype.reduceRight()"
          }
      ]
  },
  {
      question: "<h3>How to make a request synchronously?</h3>",
      answers: [
          {
              type: "Correct",
              content: '.open("GET", address, false); .send(data)'
          },
          {
              type: "Incorrect",
              content: "new XMLHttpRequest(address, data, f () { … })"
          },
          {
              type: "Incorrect",
              content: '.open("POST", address, true); .send(data)'
          },
          {
              type: "Incorrect",
              content: ".onreadystatechange(data, f() { … }); .send(data)"
          }
      ]
  },
  {
      question: "<h3>How to stop event bubbling in a cross-browser way?</h3>",
      answers: [
          {
              type: "Correct",
              content: "stopPropagation(); cancelBubble = true;"
          },
          {
              type: "Incorrect",
              content: "stopPropagation(); preventDefault();"
          },
          {
              type: "Incorrect",
              content: "preventDefault(); returnValue = false;"
          },
          {
              type: "Incorrect",
              content: "stopPropagation();"
          }
      ]
  },
  {
      question: encodeURI(`<h3>What is the result of the following code?</h3>
      <div>
        <code>
          var a = 'test';<br>
          function f(a) { var a; return a; }<br>
          console.log(f(a));
        </code>
      </div>`),
      answers: [
          {
              type: "Correct",
              content: "'test'"
          },
          {
              type: "Incorrect",
              content: "undefined"
          },
          {
              type: "Incorrect",
              content: "error"
          },
          {
              type: "Incorrect",
              content: "other"
          }
      ]
  }
];

export default quizQuestions;

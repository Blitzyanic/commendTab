import {data} from "../home/Search/shortcuts.ts";

const sendTo = (url: string) => { window.location.replace(url) };

export function commend(args: string) {
  switch (args.charAt(0)) {
    case "!":
      shortcuts(args);
      break;

    case ":":
      localhostPort(args);
      break;

    case "/":
      config(args);
      break;

    default:
      sendTo("https://search.brave.com/search?q="+args);
      break;
  }
}

function shortcuts(args: string) {
  if (args in data) {
    const url = data[args];
    sendTo(url);
  }
}

function localhostPort(args: string) {
  sendTo("http://localhost:"+args.substring(1));
}

function config(args: string) {
  console.log(args);
}
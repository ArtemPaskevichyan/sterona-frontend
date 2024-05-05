import type {
  BoardJSON,
  TaskJSON,
  TaskModelJSON,
} from "@/shared/types/serverJSON";

export class BoardWebSocketProvider {
  private BASE_URL = "ws://127.0.0.1:8000/ws/board/";
  private socket: WebSocket;

  onReceive: {
    "hello.board"?: (boardData: BoardJSON) => void;
    "update.board"?: (boardData: BoardJSON) => void;
    "hello.tasks"?: (tasks: { tasks: TaskJSON[] }) => void;
    "update.task"?: (task: TaskJSON) => void;
    "add.task"?: (task: TaskJSON) => void;
    "delete.task"?: (taskId: number) => void;
  } = {};

  constructor({
    boardId,
    onConnect,
    onClose,
    onReceive,
  }: {
    boardId: number;
    onConnect?: (e: Event) => void;
    onClose?: (e: CloseEvent) => void;
    onReceive?: {
      "hello.board"?: (boardData: BoardJSON) => void;
      "update.board"?: (boardData: BoardJSON) => void;
      "hello.tasks"?: (tasks: { tasks: TaskJSON[] }) => void;
      "update.task"?: (task: TaskJSON) => void;
      "add.task"?: (task: TaskJSON) => void;
      "delete.task"?: (taskId: number) => void;
    };
  }) {
    this.onReceive = onReceive ?? {};

    this.BASE_URL += String(boardId) + "/";
    this.socket = new WebSocket(this.BASE_URL);

    this.socket.onopen = (event) => {
      onConnect && onConnect(event);
    };

    this.socket.onclose = (event) => {
      onClose && onClose(event);
    };

    this.socket.addEventListener("message", (event) => {
      const message: { type: string; data: TaskJSON | BoardJSON | TaskJSON[] } =
        JSON.parse(event.data);
      console.log("message", message.type, message);
      //@ts-ignore
      this.onReceive[message.type] &&
        //@ts-ignore
        this.onReceive[message.type](message.data);
    });
  }

  updateTask(task: TaskJSON) {
    this.socket.send(JSON.stringify({ type: "update.task", data: task }));
  }

  addTask(task: TaskModelJSON) {
    console.log("sendAddTask", task);
    this.socket.send(JSON.stringify({ type: "add.task", data: task }));
  }

  deleteTask(taskId: number) {
    this.socket.send(JSON.stringify({ type: "delete.task", data: taskId }));
  }
}

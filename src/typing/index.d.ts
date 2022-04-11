interface Window {
  dragIndex: number;
  QC: {
    Login: {
      showPopup: (arg: any) => Window;
      signOut: any;
    };
  };
}

type EmptyProp = any;

interface User {
  name: string;
  avatar: string;
  _id: string;
}

type CommonFn = (...args: any[]) => any;

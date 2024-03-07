import { useEffect, useRef, useState } from "react";

interface Props {
  children: React.ReactNode;
  toggleButton: (isOpen: boolean) => React.ReactNode;
  isOpen?: boolean;
}

const Dropdown = ({ children, toggleButton, isOpen = false }: Props) => {
  const [open, setOpen] = useState(isOpen);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [dropdownRef]);

  return (
    <div className="relative" ref={dropdownRef}>
      <button onClick={() => setOpen(!open)}> {toggleButton(open)}</button>
      {open && (
        <div className="absolute top-10 right-0 p-4 bg-white shadow z-10">
          {children}
        </div>
      )}
    </div>
  );
};

export default Dropdown;

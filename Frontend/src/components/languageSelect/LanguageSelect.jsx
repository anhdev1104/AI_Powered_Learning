import { LANGUAGE_VERSION } from '@/constants/common';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';

const languages = Object.entries(LANGUAGE_VERSION);

const LanguageSelect = ({ selectedLanguage, handleLanguageSelect }) => {
  return (
    <div className="text-right mb-5">
      <Menu as="div" className="relative inline-block text-left px-5 mx-auto">
        <div>
          <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white text-xl font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 px-5 py-4 text-center capitalize">
            {selectedLanguage}
          </MenuButton>
        </div>

        <MenuItems
          as="div"
          className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition transform scale-95 opacity-0 data-[open]:scale-100 data-[open]:opacity-100"
        >
          <div className="py-1">
            {languages.map(([language, version]) => (
              <MenuItem as="div" key={language} onClick={() => handleLanguageSelect(language)}>
                {({ active }) => (
                  <div
                    className={`block px-5 py-3 text-xl cursor-pointer capitalize ${
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                    }`}
                  >
                    {language} <span className="text-gray-500">({version})</span>
                  </div>
                )}
              </MenuItem>
            ))}
          </div>
        </MenuItems>
      </Menu>
    </div>
  );
};

export default LanguageSelect;

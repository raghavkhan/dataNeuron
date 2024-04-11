import React, { useState , useEffect} from 'react';
import { ResizableBox } from 'react-resizable';
import './styles.css'; 

import ComponentOne from '../../components/Component1';
import ComponentTwo from '../../components/Component2';
import ComponentThree from '../../components/Component3';
import ListData from '../../services/ListData';

const ResizableComponent = () => {
    const [isRefetch, setRefetch] = useState(false);
  const [listData, setListData] = useState([]);

  useEffect(() => {
    getData();
  }, [isRefetch]);

  const getData = async () => {
    const data = await ListData();
    console.log(data);
    setListData(data);
  };
    const [widths, setWidths] = useState([{component:<ComponentOne listData={listData} setRefetch={setRefetch}/>,width:400},
    {component:<ComponentTwo listData={listData} setRefetch={setRefetch}/>,width:400}, 
    {component:<ComponentThree listData={listData} setRefetch={setRefetch}/>,width:400}]); 
    
    const handleResize = (index, { size }) => {
        const newWidths = [...widths];
        const delta = size.width - newWidths[index].width;
    
        newWidths[index].width = size.width;
    
        // Adjust the widths of the neighbors
        if (index > 0) { 
            newWidths[index - 1].width -= delta;
        } 
        if (index < widths.length - 1) {
            newWidths[index + 1].width -= delta;
        }
    
        setWidths(newWidths);
    };
    
    // const handleResize = (index, { size }) => {
    //     const newWidths = [...widths];
    //     const delta = size.width - newWidths[index];

    //     newWidths[index] = size.width;

    //     // Adjust the widths of the neighbors
    //     if (index > 0) { 
    //         newWidths[index - 1] -= delta;
    //     } 
    //     if (index < widths.length - 1) {
    //         newWidths[index + 1] -= delta;
    //     }

    //     setWidths(newWidths);
    // };

    return (
        <div className="container">
            {widths.map((obj, index) => (
                <ResizableBox
                    key={index}
                    width={obj.width}
                    onResize={(e, data) => handleResize(index, data)}
                    minConstraints={[100, 100]} // Set minimum width constraint
                    maxConstraints={[500, Infinity]} // Set maximum width constraint
                >
                    {/* Component {index + 1} */}
                    {obj.component}
                </ResizableBox>
            ))}
        </div>
    );
};

export default ResizableComponent;

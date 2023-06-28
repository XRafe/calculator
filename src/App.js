import './App.css';
import {Box} from "@mui/material";
import {useState} from "react";
import { ReactComponent as Element } from './element.svg';
import { ReactComponent as ListLine } from './line.svg';
import {DateField, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";

function App() {

    let [num1, setNum1] = useState();
    let [num2, setNum2] = useState();
    let [num3, setNum3] = useState();
    let [num4, setNum4] = useState();
    let [num5, setNum5] = useState();
    let [num6, setNum6] = useState();
    let [num7, setNum7] = useState();
    let [num8, setNum8] = useState();
    let [num9, setNum9] = useState();
    let [num10, setNum10] = useState();
    let [num11, setNum11] = useState();
    let [num12, setNum12] = useState();
    let [num13, setNum13] = useState();
    let [num14, setNum14] = useState();
    let [num15, setNum15] = useState();
    let [num16, setNum16] = useState();
    let [num17, setNum17] = useState();
    let [num18, setNum18] = useState();
    let [num19, setNum19] = useState();
    let [num20, setNum20] = useState();
    let [num21, setNum21] = useState();
    let [num22, setNum22] = useState();
    let [num23, setNum23] = useState();
    let [num24, setNum24] = useState();
    let [num25, setNum25] = useState();
    let [num26, setNum26] = useState();
    let [num27, setNum27] = useState();
    let [num28, setNum28] = useState();


    function getDataToFields(e) {
        if (document.getElementById('dateField') != null)
            if (document.getElementById('dateField').ariaInvalid == 'true')
                return;

        let tempNum8 = firstRule(parseInt(e.target.value.split('.')[0]));
        setNum8(tempNum8);

        let tempNum13 = parseInt(e.target.value.split('.')[1]);
        setNum13(tempNum13);

        let tempNum17 = firstRule(parseInt(e.target.value.split('.')[2]));
        setNum17(tempNum17);

        let tempNum23 = firstRule(tempNum8 + tempNum13 + tempNum17);
        setNum23(tempNum23);

        let tempNum1 = firstRule(tempNum8 + tempNum13 + tempNum17 + tempNum23);
        setNum1(tempNum1);

        let tempNum5 = firstRule(tempNum1 + tempNum8);
        setNum5(tempNum5);

        let tempNum10 = firstRule(tempNum8 + tempNum13);
        setNum10(tempNum10);

        let tempNum15 = firstRule(tempNum13 + tempNum17);
        setNum15(tempNum15);

        let tempNum20 = firstRule(tempNum17 + tempNum23);
        setNum20(tempNum20);

        let tempNum25 = firstRule(tempNum1 + tempNum23);
        setNum25(tempNum25);

        let tempNum2 = firstRule(tempNum1 + tempNum5);
        setNum2(tempNum2);

        let tempNum7 = firstRule(tempNum5 + tempNum8);
        setNum7(tempNum7);

        let tempNum9 = firstRule(tempNum8 + tempNum10);
        setNum9(tempNum9);

        let tempNum11 = firstRule(tempNum10 + tempNum13);
        setNum11(tempNum11);

        let tempNum12 = firstRule(tempNum13 + tempNum15);
        setNum12(tempNum12);

        let tempNum16 = firstRule(tempNum15 + tempNum17);
        setNum16(tempNum16);

        let tempNum18 = firstRule(tempNum17 + tempNum20);
        setNum18(tempNum18);

        let tempNum22 = firstRule(tempNum20 + tempNum23);
        setNum22(tempNum22);

        let tempNum24 = firstRule(tempNum23 + tempNum25);
        setNum24(tempNum24);

        let tempNum3 = firstRule(tempNum1 + tempNum25);
        setNum3(tempNum3);

        let tempNum6 = firstRule(tempNum5 + tempNum10);
        setNum6(tempNum6);

        let tempNum14 = firstRule(tempNum10 + tempNum15);
        setNum14(tempNum14);

        let tempNum19 = firstRule(tempNum15 + tempNum20);
        setNum19(tempNum19);

        let tempNum21 = firstRule(tempNum20 + tempNum25);
        setNum21(tempNum21);

        let tempNum4 = firstRule(tempNum5 + tempNum25);
        setNum4(tempNum4);

        let tempNum26 = firstRule(tempNum1 + tempNum8 + tempNum13 + tempNum17 + tempNum23);
        setNum26(tempNum26);

        let tempNum27 = firstRule(tempNum5 + tempNum10 + tempNum15 + tempNum20 + tempNum25);
        setNum27(tempNum27);

        let tempNum28 = firstRule(tempNum26 + tempNum27);
        setNum28(tempNum28);
    }

    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >

            <div className="App">
                <div onKeyUp={getDataToFields}>
                    {datePicker()}
                </div>

                <div className="App-list-container">
                    <svg viewBox="0 0 550 1000" className="App-one-list">
                        <Element />
                        </svg>
                    <svg viewBox="0 0 550 1000" className="App-two-list">
                        <Element />
                    </svg>
                    <svg viewBox="0 0 550 1000" className="App-three-list">
                        <Element />
                    </svg>
                    <svg viewBox="0 0 550 1000" className="App-four-list">
                        <Element />
                    </svg>
                    <svg viewBox="0 0 550 1000" className="App-five-list">
                        <Element />
                    </svg>

                    <svg viewBox="0 0 550 1000" className="App-list-line">
                        <ListLine />
                    </svg>

                    <div className="App-general-label1">{num1}</div>
                    <div className="App-general-label2">{num2}</div>
                    <div className="App-general-label3">{num3}</div>
                    <div className="App-general-label4">{num4}</div>
                    <div className="App-general-label5">{num5}</div>
                    <div className="App-general-label6">{num6}</div>
                    <div className="App-general-label7">{num7}</div>
                    <div className="App-general-label8">{num8}</div>
                    <div className="App-general-label9">{num9}</div>
                    <div className="App-general-label10">{num10}</div>
                    <div className="App-general-label11">{num11}</div>
                    <div className="App-general-label12">{num12}</div>
                    <div className="App-general-label13">{num13}</div>
                    <div className="App-general-label14">{num14}</div>
                    <div className="App-general-label15">{num15}</div>
                    <div className="App-general-label16">{num16}</div>
                    <div className="App-general-label17">{num17}</div>
                    <div className="App-general-label18">{num18}</div>
                    <div className="App-general-label19">{num19}</div>
                    <div className="App-general-label20">{num20}</div>
                    <div className="App-general-label21">{num21}</div>
                    <div className="App-general-label22">{num22}</div>
                    <div className="App-general-label23">{num23}</div>
                    <div className="App-general-label24">{num24}</div>
                    <div className="App-general-label25">{num25}</div>

                    <div className="App-general-combo-label">{num26} {num27} {num28}</div>
                </div>

                <div style={{marginTop: '350px'}} className="App-text-style">
                    Сфера<br/>ИНДИВИДУАЛЬНОСТИ
                    <div className="App-list-general">
                        <div>
                            <svg viewBox="0 0 550 1000" className="App-other-list">
                                <Element />
                            </svg>

                            <div className="App-label1">{num7}</div>
                            <div className="App-label2">{num8}</div>
                            <div className="App-label3">{num9}</div>
                            <div className="App-label4">{num6}</div>
                            <div className="App-label5">{num5}</div>
                            <div className="App-label6">{num10}</div>
                            <div className="App-combo-label">{num26} {num27} {num28}</div>
                        </div>

                        <div className="App-text-lower-style">
                            {num8} - основное предназначение
                            <br/>
                            {num6} - основной урок
                            <br/>
                            {num7}, {num9} - уроки
                            <br/><br/>
                            {num5}, {num10} - родовые ошибки
                        </div>
                    </div>
                </div>
                <div className="App-text-style">
                    Сфера<br/>ОСОЗНАННОСТИ
                    <div className="App-list-general">
                        <div>
                            <svg viewBox="0 0 550 1000" className="App-other-list">
                                <Element />
                            </svg>

                            <div className="App-label1">{num11}</div>
                            <div className="App-label2">{num13}</div>
                            <div className="App-label3">{num12}</div>
                            <div className="App-label4">{num14}</div>
                            <div className="App-label5">{num10}</div>
                            <div className="App-label6">{num15}</div>
                            <div className="App-combo-label">{num26} {num27} {num28}</div>
                        </div>

                        <div className="App-text-lower-style">
                            {num13} - основное предназначение
                            <br/>
                            {num14} - основной урок
                            <br/>
                            {num11}, {num12} - уроки
                            <br/><br/>
                            {num10}, {num15} - родовые ошибки
                        </div>
                    </div>
                </div>
                <div className="App-text-style">
                    Сфера<br/>РЕАЛИЗАЦИИ ДЕНЕГ
                    <div className="App-list-general">
                        <div>

                            <svg viewBox="0 0 550 1000" className="App-other-list">
                                <Element />
                            </svg>

                            <div className="App-label1">{num16}</div>
                            <div className="App-label2">{num17}</div>
                            <div className="App-label3">{num18}</div>
                            <div className="App-label4">{num19}</div>
                            <div className="App-label5">{num15}</div>
                            <div className="App-label6">{num20}</div>
                            <div className="App-combo-label">
                                {num26} {num27} {num28}
                            </div>
                        </div>
                        <div className="App-text-lower-style">
                            {num17} - основное предназначение
                            <br/>
                            {num19} - основной урок
                            <br/>
                            {num16}, {num18} - уроки
                            <br/><br/>
                            {num15}, {num20} - родовые ошибки
                        </div>
                    </div>
                </div>
                <div className="App-text-style">
                    Сфера ОТНОШЕНИЙ
                    <div className="App-list-general">
                        <div>
                            <svg viewBox="0 0 550 1000" className="App-other-list">
                                <Element />
                            </svg>

                            <div className="App-label1">{num22}</div>
                            <div className="App-label2">{num23}</div>
                            <div className="App-label3">{num24}</div>
                            <div className="App-label4">{num21}</div>
                            <div className="App-label5">{num20}</div>
                            <div className="App-label6">{num25}</div>
                            <div className="App-combo-label">
                                {num26} {num27} {num28}
                            </div>
                        </div>
                        <div className="App-text-lower-style">
                            {num23} - основное предназначение
                            <br/>
                            {num21} - основной урок
                            <br/>
                            {num22}, {num24} - уроки
                            <br/><br/>
                            {num20}, {num25} - родовые ошибки
                        </div>
                    </div>
                </div>
                <div className="App-text-style">
                    Сфера ЗДОРОВЬЯ
                    <div className="App-list-general">
                        <div>
                            <svg viewBox="0 0 550 1000" className="App-other-list">
                                <Element />
                            </svg>

                            <div className="App-label1">{num3}</div>
                            <div className="App-label2">{num1}</div>
                            <div className="App-label3">{num2}</div>
                            <div className="App-label4">{num4}</div>
                            <div className="App-label5">{num25}</div>
                            <div className="App-label6">{num5}</div>
                            <div className="App-combo-label">
                                {num26} {num27} {num28}
                            </div>
                        </div>
                        <div className="App-text-lower-style">
                            {num1} - основное предназначение
                            <br/>
                            {num4} - основной урок
                            <br/>
                            {num3}, {num2} - уроки
                            <br/><br/>
                            {num25}, {num5} - родовые ошибки
                        </div>
                    </div>
                </div>
                <div className="App-text-style">
                    <label>Родовые ошибки</label>
                    <div style={{marginTop: 2}} className="App-text-lower-style">
                        <br/>
                        {num10}, {num20} - по отцовской линии
                        <br/>
                        <br/>
                        {num5}, {num15} - по материнской линии
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                    </div>
                </div>
                <div className="App-text-style">
                    <label>Ошибка<br/>прошлых воплощений</label>
                    <div style={{marginTop: 2}} className="App-text-lower-style">
                        <br/>
                        {num25}
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                    </div>
                </div>
                <div className="App-text-style">
                    Код Миссии Души
                    <div style={{marginTop: 2}} className="App-text-lower-style">
                        <br/>
                        {num26} {num27} {num28}
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </div>
            </div>
        </Box>
  );
}

function datePicker() {
    return (
        <div className="App-date-picker">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateField
                    sx={{
                        input: { color: 'white' },
                        label: { color: 'white' }
                    }}
                    id="dateField"
                    label="Дата рождения"
                    format="DD.MM.YYYY"
                    focused
                    InputLabelProps={{
                        shrink: true
                    }}
                />
            </LocalizationProvider>
        </div>
    )
}

function bitwiseAdding(num) {
    let change = parseInt(num);
    let digit = change % 10;
    let sum = 0;
    while(change > 0) {
        sum += digit;
        change = parseInt(change / 10);
        digit = change % 10;
    }
    if (sum > 22) {
        sum = bitwiseAdding(sum);
    }

    return parseInt(sum);
}

function firstRule(num) {
    return num > 22 ? bitwiseAdding(num): num;
}

export default App;

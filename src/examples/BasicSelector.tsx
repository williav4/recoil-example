import {
    Box,
    FormControl,
    FormLabel,
    Heading,
    HStack,
    Icon,
    NumberInput,
    NumberInputField,
    Switch,
} from '@chakra-ui/react'
import {ArrowRight} from 'react-feather'
import {atom, selector, useRecoilState, useRecoilValue} from 'recoil'

const exchangeRate = 0.83

const usdAtom = atom({
    key: 'usdSimple',
    default: 1
});

const eurSelector = selector<number>({
    key:'eurSimple',
    get: ({get}) => {
        let usd = get(usdAtom);
        return usd * exchangeRate;
    },
    set: ({set, get}, newEurValue) => {
        //@ts-ignore
        let newUsdValue = newEurValue / exchangeRate;
        set(usdAtom, newUsdValue);
    }
})

export const BasicSelectors = () => {
    const [usd, setUSD] = useRecoilState(usdAtom);
    //when selector only has a get key value
    //const eur = useRecoilValue(eurSelector);

    //when selector has a get + set key value
    const [eur, setEUR] = useRecoilState(eurSelector);

    return (
        <div style={{padding: 20}}>
            <Heading size="lg" mb={2}>
                Currency converter
            </Heading>
            <InputStack>
                <CurrencyInput label="usd" amount={usd} onChange={(usd) => {setUSD(usd)}}/>
                <CurrencyInput label="eur" amount={eur} onChange={(eur) => {setEUR(eur)}}/>
            </InputStack>
        </div>
    )
}

const InputStack: React.FC = ({children}) => {
    return (
        <HStack
            width="300px"
            mb={4}
            spacing={4}
            divider={
                <Box border="0 !important" height="40px" alignItems="center" display="flex">
                    <Icon as={ArrowRight} />
                </Box>
            }
            align="flex-end"
        >
            {children}
        </HStack>
    )
}

const CurrencyInput = ({
    amount,
    onChange,
    label,
}: {
    label: string
    amount: number
    onChange?: (amount: number) => void
}) => {
    let symbol = label === 'usd' ? '$' : '€'

    return (
        <FormControl id={label.toUpperCase()}>
            <FormLabel>{label.toUpperCase()}</FormLabel>
            <NumberInput
                value={`${symbol} ${amount}`}
                onChange={(value) => {
                    const withoutSymbol = value.split(' ')[0]
                    onChange?.(parseFloat(withoutSymbol || '0'))
                }}
            >
                <NumberInputField />
            </NumberInput>
        </FormControl>
    )
}
'use client';

import type { TooltipProps } from 'recharts';
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';
import type { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent';

type DataPoint = {
  revenue: number;
  date: string;
};

const data: DataPoint[] = [
  {
    revenue: 400,
    date: 'Jan 1',
  },
  {
    revenue: 300,
    date: 'Jan 2',
  },
  {
    revenue: 500,
    date: 'Jan 3',
  },
  {
    revenue: 700,
    date: 'Jan 4',
  },
  {
    revenue: 400,
    date: 'Jan 5',
  },
  {
    revenue: 600,
    date: 'Jan 6',
  },
];

const CustomTooltip = ({
  active,
  payload,
}: TooltipProps<ValueType, NameType>) => {
  if (!active || !payload?.length) {
    return null;
  }

  const value = payload[0]?.value;
  if (typeof value !== 'number') {
    return null;
  }

  return (
    <div className="rounded-lg border bg-background p-2 shadow-sm">
      <div className="grid grid-cols-2 gap-2">
        <div className="flex flex-col">
          <span className="text-[0.70rem] uppercase text-muted-foreground">
            Revenue
          </span>
          <span className="font-bold text-muted-foreground">
            $
            {value}
          </span>
        </div>
      </div>
    </div>
  );
};

export function Analytics() {
  return (
    <div className="rounded-lg border bg-card p-6">
      <div className="flex flex-row items-center justify-between space-y-0 pb-2">
        <h3 className="text-sm font-medium tracking-tight">Revenue over time</h3>
      </div>
      <div className="h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis
              dataKey="date"
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}

            />
            <Tooltip content={CustomTooltip} />
            <Line
              type="monotone"
              dataKey="revenue"
              strokeWidth={2}
              activeDot={{
                r: 6,
                style: { fill: 'var(--theme-primary)', opacity: 0.8 },
              }}
              style={
                {
                  stroke: 'var(--theme-primary)',
                  opacity: 0.8,
                } as React.CSSProperties
              }
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

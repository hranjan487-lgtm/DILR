export interface ClassRecording {
  /** Session date, as YYYY-MM-DD, for sorting and display. */
  date: string
  url: string
}

const drive = (fileId: string) => `https://drive.google.com/file/d/${fileId}/view`

// "DILR 2025" folder
const dilr2025: ClassRecording[] = [
  { date: '2025-10-12', url: drive('1CLMcooI5vHI7FN7k9yGsRWB-b_xzpbD9') },
  { date: '2025-10-11', url: drive('1ldmwJ2V8I0H-DwcD7e-FP-kfYshHsWji') },
  { date: '2025-10-05', url: drive('1yyEjzW7rJnx3bfVJAASsK2Xs4kgkwfa5') },
  { date: '2025-10-04', url: drive('1Gg_HTgVC5FNbHY-HhKt7FRWTD4Wq1Rfu') },
  { date: '2025-09-28', url: drive('1d8hONUZybjJc4y5CVdzGjhLf_O6MDa88') },
  { date: '2025-09-27', url: drive('1MHkjqHhs3t25RZiAn6Jd1-OcdLyMAga-') },
  { date: '2025-09-21', url: drive('17aPN1yncTaTLSB1lEQ0KSYvGAjbpvNDy') },
  { date: '2025-09-20', url: drive('1o8ELA0zibjV_oOiEm2-7o5b98lDJL8JL') },
  { date: '2025-09-14', url: drive('1eP8YVnPvfzgO7dbjChPj2p1LzwwicTSs') },
  { date: '2025-09-13', url: drive('1Q97FRfJj7Bo_10Xa7QvCOGOw-3Zf_vsS') },
  { date: '2025-09-11', url: drive('1GI1KAwQZErsiIXeum466e0qhp8cWtOG-') },
  { date: '2025-09-11', url: drive('1XRAiLDUZOvWeS265DjDaDL9SErrdeSmr') },
  { date: '2025-09-07', url: drive('1b4rp8w-1lPZrW6v5B4GusYaJiTBc1ygV') },
  { date: '2025-08-31', url: drive('1Tm4MM12Aus7steO9l1YbPaxMaRYBP1Pc') },
  { date: '2025-08-24', url: drive('18DOXNvFY3XhKHAJbh577LJgJ-GWXfsMn') },
  { date: '2025-08-17', url: drive('1n5iG_1NzQOzh-iuHuoE1ycqGNVYsRSBc') },
  { date: '2025-08-03', url: drive('1deHQWMRXB8bmb7xL1GlRhWbccoCKSgmx') },
  { date: '2025-08-02', url: drive('1C1AqhWmc9JKuzZqjOT9e7q08Kq_Uo2nM') },
  { date: '2025-07-27', url: drive('1Uw-c0uBv0NJPVdxH4jYPpumz0MXn_OfW') },
  { date: '2025-07-26', url: drive('1iEYEJ2YZPHj27WRHQS_FUT5T5P3lFqhJ') },
  { date: '2025-07-20', url: drive('1fxyqKXwU9pBySg-Zftl_r-I9D4BvxWQ_') },
  { date: '2025-07-19', url: drive('1ptPOWiDf1YXzSko7he17F4gDMXHGqda2') },
  { date: '2025-07-13', url: drive('1kkdjDmh7nxr6H-LRWSBn6RNH-x4raqb5') },
  { date: '2025-07-12', url: drive('1ERWcoLsUEa6luLJp5vRDa5lVkluw9Ayj') },
  { date: '2025-07-08', url: drive('1I8biPvKF_t_xxA3CwkwhUdFOx9lFpEhY') },
  { date: '2025-07-05', url: drive('1kHNSgAzQ2_8jj6lEOAADCPwH0GY0rdhq') },
  { date: '2025-06-29', url: drive('1YipGEX_rbE7wkZJrtWbcyjPO4FJjTg6w') },
  { date: '2025-06-28', url: drive('16x3LKbg0X2HtcaKeRx7gMAKSE-7lkIZw') },
]

// "DILR videos" folder (2024 and earlier)
const dilrOlder: ClassRecording[] = [
  { date: '2024-05-04', url: drive('1pyim9_dd6Jx5k2PG8VSl9CzT4-o_E7RP') },
  { date: '2024-03-16', url: drive('1vz-TgCooawhDXOMUfQSIdElCb_RDDfcS') },
  { date: '2024-03-09', url: drive('14f8_luASd87yvTQi9X_bb5svDL5XX-mS') },
]

export const classRecordings: ClassRecording[] = [...dilr2025, ...dilrOlder].sort((a, b) =>
  b.date.localeCompare(a.date),
)

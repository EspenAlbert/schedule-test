# project/project/TestAccProject_basic Test Details
# Found 34 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 21) FAIL(x 13)
Success rate: 61.76%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-02-12 00:39](#error-2026-02-12t0039460000) | CheckFailure for projects.test at Step: 1 Checks: 45 | dev | 87.00s
[2026-02-13 00:44](#error-2026-02-13t0044150000) | CheckFailure for projects.test at Step: 1 Checks: 45 | dev | 125.00s
[2026-02-14 00:39](#error-2026-02-14t0039290000) | CheckFailure for projects.test at Step: 1 Checks: 45 | dev | 69.06s
[2026-02-16 00:42](#error-2026-02-16t0042240000) | CheckFailure for projects.test at Step: 1 Checks: 45 | dev | 109.06s
[2026-02-17 00:40](#error-2026-02-17t0040000000) | CheckFailure for projects.test at Step: 1 Checks: 45 | dev | 87.03s
[2026-02-18 00:41](#error-2026-02-18t0041060000) | CheckFailure for projects.test at Step: 1 Checks: 45 | dev | 72.08s
[2026-02-19 00:41](#error-2026-02-19t0041110000) | CheckFailure for projects.test at Step: 1 Checks: 45 | dev | 91.05s
[2026-02-20 00:39](#error-2026-02-20t0039190000) | CheckFailure for projects.test at Step: 1 Checks: 45 | dev | 102.06s
[2026-02-21 00:38](#error-2026-02-21t0038000000) | CheckFailure for projects.test at Step: 1 Checks: 45 | dev | 66.00s
[2026-02-23 00:42](#error-2026-02-23t0042030000) | CheckFailure for projects.test at Step: 1 Checks: 45 | dev | 111.09s
[2026-02-24 00:38](#error-2026-02-24t0038150000) | CheckFailure for projects.test at Step: 1 Checks: 45 | dev | 73.01s
[2026-02-24 14:18](#error-2026-02-24t1418080000) | CheckFailure for projects.test at Step: 1 Checks: 45 | dev | 116.07s
[2026-03-05 00:41](#error-2026-03-05t0041050000) |  | dev | 113.06s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05 PASS 3 minutes
- 2026-02-06 PASS 3 minutes
- 2026-02-07 PASS 3 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 3 minutes
- 2026-02-10 PASS 3 minutes
- 2026-02-11 PASS 4 minutes
- 2026-02-12

### Error 2026-02-12T00:39:46+00:00
```
2026-02-12T00:39:46.6071790Z === RUN   TestAccProject_basic
2026-02-12T00:39:46.6082307Z === CONT  TestAccProject_basic
2026-02-12T00:39:46.6139287Z === NAME  TestAccProject_basic
2026-02-12T00:39:46.6140917Z     resource_project_test.go:558: Step 1/4 error: Check failed: Check 45/45 error: data.mongodbatlas_projects.test: Attribute "results.0.users.#" value: 0 is not greater than 0
2026-02-12T00:39:46.6142169Z --- FAIL: TestAccProject_basic (87.00s)
```

- 2026-02-13

### Error 2026-02-13T00:44:15+00:00
```
2026-02-13T00:44:15.7178830Z === RUN   TestAccProject_basic
2026-02-13T00:44:15.7191627Z === CONT  TestAccProject_basic
2026-02-13T00:44:15.7249972Z === NAME  TestAccProject_basic
2026-02-13T00:44:15.7250906Z     resource_project_test.go:558: Step 1/4 error: Check failed: Check 45/45 error: data.mongodbatlas_projects.test: Attribute "results.0.users.#" value: 0 is not greater than 0
2026-02-13T00:44:15.7251654Z --- FAIL: TestAccProject_basic (125.04s)
```

- 2026-02-14

### Error 2026-02-14T00:39:29+00:00
```
2026-02-14T00:39:29.3211760Z === RUN   TestAccProject_basic
2026-02-14T00:39:29.3224179Z === CONT  TestAccProject_basic
2026-02-14T00:39:29.3272621Z === NAME  TestAccProject_basic
2026-02-14T00:39:29.3273459Z     resource_project_test.go:558: Step 1/4 error: Check failed: Check 45/45 error: data.mongodbatlas_projects.test: Attribute "results.0.users.#" value: 0 is not greater than 0
2026-02-14T00:39:29.3274130Z --- FAIL: TestAccProject_basic (69.56s)
```

- 2026-02-15: MISSING
- 2026-02-16

### Error 2026-02-16T00:42:24+00:00
```
2026-02-16T00:42:24.5179356Z === RUN   TestAccProject_basic
2026-02-16T00:42:24.5190350Z === CONT  TestAccProject_basic
2026-02-16T00:42:24.5245439Z === NAME  TestAccProject_basic
2026-02-16T00:42:24.5246567Z     resource_project_test.go:558: Step 1/4 error: Check failed: Check 45/45 error: data.mongodbatlas_projects.test: Attribute "results.0.users.#" value: 0 is not greater than 0
2026-02-16T00:42:24.5247335Z --- FAIL: TestAccProject_basic (109.55s)
```

- 2026-02-17

### Error 2026-02-17T00:40:00+00:00
```
2026-02-17T00:40:00.6000806Z === RUN   TestAccProject_basic
2026-02-17T00:40:00.6010964Z === CONT  TestAccProject_basic
2026-02-17T00:40:00.6058542Z === NAME  TestAccProject_basic
2026-02-17T00:40:00.6059448Z     resource_project_test.go:558: Step 1/4 error: Check failed: Check 45/45 error: data.mongodbatlas_projects.test: Attribute "results.0.users.#" value: 0 is not greater than 0
2026-02-17T00:40:00.6060130Z --- FAIL: TestAccProject_basic (87.28s)
```

- 2026-02-18

### Error 2026-02-18T00:41:06+00:00
```
2026-02-18T00:41:06.9853552Z === RUN   TestAccProject_basic
2026-02-18T00:41:06.9865122Z === CONT  TestAccProject_basic
2026-02-18T00:41:06.9921576Z === NAME  TestAccProject_basic
2026-02-18T00:41:06.9922661Z     resource_project_test.go:558: Step 1/4 error: Check failed: Check 45/45 error: data.mongodbatlas_projects.test: Attribute "results.0.users.#" value: 0 is not greater than 0
2026-02-18T00:41:06.9923419Z --- FAIL: TestAccProject_basic (72.77s)
```

- 2026-02-19

### Error 2026-02-19T00:41:11+00:00
```
2026-02-19T00:41:11.0451355Z === RUN   TestAccProject_basic
2026-02-19T00:41:11.0466509Z === CONT  TestAccProject_basic
2026-02-19T00:41:11.0524188Z === NAME  TestAccProject_basic
2026-02-19T00:41:11.0525835Z     resource_project_test.go:558: Step 1/4 error: Check failed: Check 45/45 error: data.mongodbatlas_projects.test: Attribute "results.0.users.#" value: 0 is not greater than 0
2026-02-19T00:41:11.0527266Z --- FAIL: TestAccProject_basic (91.51s)
```

- 2026-02-20

### Error 2026-02-20T00:39:19+00:00
```
2026-02-20T00:39:19.7654347Z === RUN   TestAccProject_basic
2026-02-20T00:39:19.7665183Z === CONT  TestAccProject_basic
2026-02-20T00:39:19.7719815Z === NAME  TestAccProject_basic
2026-02-20T00:39:19.7720740Z     resource_project_test.go:558: Step 1/4 error: Check failed: Check 45/45 error: data.mongodbatlas_projects.test: Attribute "results.0.users.#" value: 0 is not greater than 0
2026-02-20T00:39:19.7773276Z --- FAIL: TestAccProject_basic (102.55s)
```

- 2026-02-21

### Error 2026-02-21T00:38:00+00:00
```
2026-02-21T00:38:00.2528526Z === RUN   TestAccProject_basic
2026-02-21T00:38:00.2539655Z === CONT  TestAccProject_basic
2026-02-21T00:38:00.2592061Z === NAME  TestAccProject_basic
2026-02-21T00:38:00.2593025Z     resource_project_test.go:558: Step 1/4 error: Check failed: Check 45/45 error: data.mongodbatlas_projects.test: Attribute "results.0.users.#" value: 0 is not greater than 0
2026-02-21T00:38:00.2593769Z --- FAIL: TestAccProject_basic (66.02s)
```

- 2026-02-22: MISSING
- 2026-02-23

### Error 2026-02-23T00:42:03+00:00
```
2026-02-23T00:42:03.3755537Z === RUN   TestAccProject_basic
2026-02-23T00:42:03.3768010Z === CONT  TestAccProject_basic
2026-02-23T00:42:03.3844526Z === NAME  TestAccProject_basic
2026-02-23T00:42:03.3845492Z     resource_project_test.go:558: Step 1/4 error: Check failed: Check 45/45 error: data.mongodbatlas_projects.test: Attribute "results.0.users.#" value: 0 is not greater than 0
2026-02-23T00:42:03.3846267Z --- FAIL: TestAccProject_basic (111.94s)
```

- 2026-02-24
  - FAIL a minute

### Error 2026-02-24T00:38:15+00:00
```
2026-02-24T00:38:15.2489702Z === RUN   TestAccProject_basic
2026-02-24T00:38:15.2499256Z === CONT  TestAccProject_basic
2026-02-24T00:38:15.2554026Z === NAME  TestAccProject_basic
2026-02-24T00:38:15.2554953Z     resource_project_test.go:558: Step 1/4 error: Check failed: Check 45/45 error: data.mongodbatlas_projects.test: Attribute "results.0.users.#" value: 0 is not greater than 0
2026-02-24T00:38:15.2555706Z --- FAIL: TestAccProject_basic (73.10s)
```

  - FAIL a minute

### Error 2026-02-24T14:18:08+00:00
```
2026-02-24T14:18:08.2831728Z === RUN   TestAccProject_basic
2026-02-24T14:18:08.2834760Z === CONT  TestAccProject_basic
2026-02-24T14:18:08.2838969Z     resource_project_test.go:558: Step 1/4 error: Check failed: Check 45/45 error: data.mongodbatlas_projects.test: Attribute "results.0.users.#" value: 0 is not greater than 0
2026-02-24T14:18:08.2841232Z --- FAIL: TestAccProject_basic (116.70s)
```

- 2026-02-25 PASS 4 minutes
- 2026-02-26 PASS 6 minutes
- 2026-02-27 PASS 5 minutes
- 2026-02-28 PASS 4 minutes
- 2026-03-01: MISSING
- 2026-03-02 PASS 5 minutes
- 2026-03-03 PASS 4 minutes
- 2026-03-04 PASS 6 minutes
- 2026-03-05

### Error 2026-03-05T00:41:05+00:00
```
2026-03-05T00:41:05.6352774Z === RUN   TestAccProject_basic
2026-03-05T00:41:05.6365612Z === CONT  TestAccProject_basic
2026-03-05T00:41:05.6450995Z === NAME  TestAccProject_basic
2026-03-05T00:41:05.6451556Z     resource_project_test.go:564: Step 1/4 error: Post-apply refresh state check(s) failed:
2026-03-05T00:41:05.6452125Z         none of the results.*.name matched
2026-03-05T00:41:05.6452474Z --- FAIL: TestAccProject_basic (113.60s)
```

- 2026-03-06 PASS 6 minutes

## QA Environment
### Timeline
- 2026-02-04 PASS 4 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS a minute
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 4 minutes
- 2026-02-16: MISSING
- 2026-02-17 PASS 2 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS a minute
- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 3 minutes
- 2026-03-02: MISSING
- 2026-03-03 PASS 3 minutes
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING

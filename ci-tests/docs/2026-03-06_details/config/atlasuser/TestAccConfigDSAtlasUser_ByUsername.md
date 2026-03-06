# config/atlasuser/TestAccConfigDSAtlasUser_ByUsername Test Details
# Found 39 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 33) FAIL(x 6)
Success rate: 84.62%

## DEV Environment
### Timeline
- 2026-02-04: MISSING
- 2026-02-05 PASS 4 seconds
- 2026-02-06 PASS a second
- 2026-02-07 PASS 9 seconds
- 2026-02-08: MISSING
- 2026-02-09 PASS a second
- 2026-02-10 PASS 4 seconds
- 2026-02-11 PASS a second
- 2026-02-12 PASS 4 seconds
- 2026-02-13 PASS a second
- 2026-02-14 PASS 4 seconds
- 2026-02-15: MISSING
- 2026-02-16 PASS a second
- 2026-02-17 PASS 5 seconds
- 2026-02-18 PASS a second
- 2026-02-19 PASS 5 seconds
- 2026-02-20 PASS a second
- 2026-02-21 PASS 5 seconds
- 2026-02-22: MISSING
- 2026-02-23 PASS a second
- 2026-02-24
  - PASS 5 seconds
  - PASS a second
- 2026-02-25 PASS a second
- 2026-02-26 PASS 5 seconds
- 2026-02-27 PASS 2 seconds
- 2026-02-28 PASS 5 seconds
- 2026-03-01: MISSING
- 2026-03-02 PASS a second
- 2026-03-03 PASS 11 seconds
- 2026-03-04 PASS a second
- 2026-03-05 PASS 10 seconds
- 2026-03-06 PASS a second

## QA Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-02-04 11:12](#error-2026-02-04t1112510000) | CheckFailure for atlas_user.test at Step: 1 Checks: 9 | qa | 0.08s
[2026-02-04 12:30](#error-2026-02-04t1230160000) | CheckFailure for atlas_user.test at Step: 1 Checks: 9 | qa | 0.06s
[2026-02-04 13:26](#error-2026-02-04t1326360000) | CheckFailure for atlas_user.test at Step: 1 Checks: 9 | qa | 0.07s
[2026-02-15 00:41](#error-2026-02-15t0041570000) | CheckFailure for atlas_user.test at Step: 1 Checks: 9 | qa | 0.07s
[2026-02-17 15:23](#error-2026-02-17t1523560000) | CheckFailure for atlas_user.test at Step: 1 Checks: 9 | qa | 0.06s
[2026-02-17 19:46](#error-2026-02-17t1946380000) | CheckFailure for atlas_user.test at Step: 1 Checks: 9 | qa | 0.07s

### Timeline
- 2026-02-04
  - FAIL a moment

### Error 2026-02-04T11:12:51+00:00
```
2026-02-04T11:12:51.8828808Z === RUN   TestAccConfigDSAtlasUser_ByUsername
2026-02-04T11:12:51.8845528Z     data_source_atlas_user_test.go:44: Step 1/1 error: Check failed: Check 9/12 error: data.mongodbatlas_atlas_user.test: Attribute "team_ids.#" value: 0 is not greater than 0
2026-02-04T11:12:51.8851253Z --- FAIL: TestAccConfigDSAtlasUser_ByUsername (0.78s)
```

  - FAIL a moment

### Error 2026-02-04T12:30:16+00:00
```
2026-02-04T12:30:16.3822865Z === RUN   TestAccConfigDSAtlasUser_ByUsername
2026-02-04T12:30:16.3832100Z     data_source_atlas_user_test.go:44: Step 1/1 error: Check failed: Check 9/12 error: data.mongodbatlas_atlas_user.test: Attribute "team_ids.#" value: 0 is not greater than 0
2026-02-04T12:30:16.3833545Z --- FAIL: TestAccConfigDSAtlasUser_ByUsername (0.56s)
```

  - FAIL a moment

### Error 2026-02-04T13:26:36+00:00
```
2026-02-04T13:26:36.1544590Z === RUN   TestAccConfigDSAtlasUser_ByUsername
2026-02-04T13:26:36.1555083Z     data_source_atlas_user_test.go:44: Step 1/1 error: Check failed: Check 9/12 error: data.mongodbatlas_atlas_user.test: Attribute "team_ids.#" value: 0 is not greater than 0
2026-02-04T13:26:36.1556838Z --- FAIL: TestAccConfigDSAtlasUser_ByUsername (0.75s)
```

- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS a second
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15

### Error 2026-02-15T00:41:57+00:00
```
2026-02-15T00:41:57.9128718Z === RUN   TestAccConfigDSAtlasUser_ByUsername
2026-02-15T00:41:57.9135435Z     data_source_atlas_user_test.go:44: Step 1/1 error: Check failed: Check 9/12 error: data.mongodbatlas_atlas_user.test: Attribute "team_ids.#" value: 0 is not greater than 0
2026-02-15T00:41:57.9136801Z --- FAIL: TestAccConfigDSAtlasUser_ByUsername (0.72s)
```

- 2026-02-16: MISSING
- 2026-02-17
  - FAIL a moment

### Error 2026-02-17T15:23:56+00:00
```
2026-02-17T15:23:56.8899570Z === RUN   TestAccConfigDSAtlasUser_ByUsername
2026-02-17T15:23:56.8905576Z     data_source_atlas_user_test.go:44: Step 1/1 error: Check failed: Check 9/12 error: data.mongodbatlas_atlas_user.test: Attribute "team_ids.#" value: 0 is not greater than 0
2026-02-17T15:23:56.8906832Z --- FAIL: TestAccConfigDSAtlasUser_ByUsername (0.59s)
```

  - FAIL a moment

### Error 2026-02-17T19:46:38+00:00
```
2026-02-17T19:46:38.7801719Z === RUN   TestAccConfigDSAtlasUser_ByUsername
2026-02-17T19:46:38.7809127Z     data_source_atlas_user_test.go:44: Step 1/1 error: Check failed: Check 9/12 error: data.mongodbatlas_atlas_user.test: Attribute "team_ids.#" value: 0 is not greater than 0
2026-02-17T19:46:38.7810521Z --- FAIL: TestAccConfigDSAtlasUser_ByUsername (0.69s)
```

- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20 PASS a second
- 2026-02-21: MISSING
- 2026-02-22 PASS a second
- 2026-02-23: MISSING
- 2026-02-24 PASS a moment
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS a second
- 2026-03-02: MISSING
- 2026-03-03 PASS a second
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING

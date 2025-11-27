# config/atlasuser/TestAccConfigDSAtlasUser_ByUsername Test Details
# Found 31 TestRuns in dev, qa from 2025-10-29 to 2025-11-27 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
### Timeline
- 2025-10-28: MISSING
- 2025-10-29 PASS a second
- 2025-10-30 PASS 3 seconds
- 2025-10-31 PASS a second
- 2025-11-01: MISSING
- 2025-11-02: MISSING
- 2025-11-03 PASS a second
- 2025-11-04 PASS 2 seconds
- 2025-11-05
  - PASS 2 seconds
  - PASS 2 seconds
- 2025-11-06 PASS 2 seconds
- 2025-11-07 PASS a second
- 2025-11-08 PASS 2 seconds
- 2025-11-09: MISSING
- 2025-11-10 PASS a second
- 2025-11-11 PASS 2 seconds
- 2025-11-12 PASS a second
- 2025-11-13 PASS 2 seconds
- 2025-11-14 PASS a second
- 2025-11-15 PASS 3 seconds
- 2025-11-16: MISSING
- 2025-11-17 PASS a second
- 2025-11-18 PASS 3 seconds
- 2025-11-19 PASS a second
- 2025-11-20 PASS 3 seconds
- 2025-11-21 PASS 2 seconds
- 2025-11-22 PASS 2 seconds
- 2025-11-23: MISSING
- 2025-11-24 PASS a second
- 2025-11-25 PASS 3 seconds
- 2025-11-26 PASS a second
- 2025-11-27 PASS 3 seconds

## QA Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-11-16 00:30](#error-2025-11-16t0030490000) | CheckFailure for atlas_user.test at Step: 1 Checks: 9 | qa | 0.05s

### Timeline
- 2025-10-28: MISSING
- 2025-10-29: MISSING
- 2025-10-30: MISSING
- 2025-10-31: MISSING
- 2025-11-01: MISSING
- 2025-11-02 PASS a second
- 2025-11-03: MISSING
- 2025-11-04: MISSING
- 2025-11-05: MISSING
- 2025-11-06: MISSING
- 2025-11-07: MISSING
- 2025-11-08: MISSING
- 2025-11-09 PASS a second
- 2025-11-10: MISSING
- 2025-11-11: MISSING
- 2025-11-12: MISSING
- 2025-11-13 PASS a second
- 2025-11-14: MISSING
- 2025-11-15: MISSING
- 2025-11-16

### Error 2025-11-16T00:30:49+00:00
```
2025-11-16T00:30:49.7991148Z === RUN   TestAccConfigDSAtlasUser_ByUsername
2025-11-16T00:30:49.7998453Z     data_source_atlas_user_test.go:44: Step 1/1 error: Check failed: Check 9/12 error: data.mongodbatlas_atlas_user.test: Attribute "team_ids.#" value: 0 is not greater than 0
2025-11-16T00:30:49.7999832Z --- FAIL: TestAccConfigDSAtlasUser_ByUsername (0.50s)
```

- 2025-11-17: MISSING
- 2025-11-18: MISSING
- 2025-11-19: MISSING
- 2025-11-20: MISSING
- 2025-11-21: MISSING
- 2025-11-22: MISSING
- 2025-11-23 PASS a second
- 2025-11-24: MISSING
- 2025-11-25: MISSING
- 2025-11-26: MISSING
- 2025-11-27: MISSING

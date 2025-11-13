# config/atlasuser/TestAccConfigDSAtlasUsers_ByOrgID Test Details
# Found 33 TestRuns in dev, qa from 2025-10-15 to 2025-11-13 from master branch: 1 unique tests, PASS(x 32) FAIL
Success rate: 96.97%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-22 00:29](#error-2025-10-22t0029490000) | CheckFailure for atlas_users.test at Step: 1 Checks: 96 | dev | flaky_check | 2.01s

## Timeline
- 2025-10-14: MISSING
- 2025-10-15 PASS 4 seconds
- 2025-10-16 PASS 3 seconds
- 2025-10-17 PASS 3 seconds
- 2025-10-18 PASS 3 seconds
- 2025-10-19 PASS a second
- 2025-10-20
  - PASS 2 seconds
  - PASS 3 seconds
- 2025-10-21 PASS 3 seconds
- 2025-10-22
  - FAIL 2 seconds

### Error 2025-10-22T00:29:49+00:00
GoTestErrorClassification(error_class='flaky_check',author='human',run_id='2025-10-22T00:29:49.208000+00:00-TestAccConfigDSAtlasUsers_ByOrgID',confidence=1.0,ts_when='22 days ago')
CheckFailure for atlas_users.test at Step: 1 Checks: 96
```
2025-10-22T00:29:49.2087982Z === RUN   TestAccConfigDSAtlasUsers_ByOrgID
2025-10-22T00:29:49.2091662Z     data_source_atlas_users_test.go:28: Step 1/1 error: Check failed: Check 96/183 error: data.mongodbatlas_atlas_users.test: Attribute 'results.7.team_ids.#' expected "1", got "0"
2025-10-22T00:29:49.2092428Z --- FAIL: TestAccConfigDSAtlasUsers_ByOrgID (2.10s)
```

  - PASS 2 seconds
- 2025-10-23 PASS 3 seconds
- 2025-10-24 PASS 4 seconds
- 2025-10-25 PASS 3 seconds
- 2025-10-26 PASS 2 seconds
- 2025-10-27 PASS 3 seconds
- 2025-10-28 PASS 2 seconds
- 2025-10-29 PASS 2 seconds
- 2025-10-30 PASS 3 seconds
- 2025-10-31 PASS 3 seconds
- 2025-11-01: MISSING
- 2025-11-02 PASS a second
- 2025-11-03 PASS 3 seconds
- 2025-11-04 PASS 3 seconds
- 2025-11-05
  - PASS 2 seconds
  - PASS 3 seconds
- 2025-11-06 PASS 3 seconds
- 2025-11-07 PASS 2 seconds
- 2025-11-08 PASS 4 seconds
- 2025-11-09 PASS a second
- 2025-11-10 PASS 3 seconds
- 2025-11-11 PASS 2 seconds
- 2025-11-12 PASS 3 seconds
- 2025-11-13
  - PASS 3 seconds
  - PASS 2 seconds
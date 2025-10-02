# config/organization/TestAccConfigRSOrganization_import Test Details
# Found 43 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 42) FAIL
Success rate: 97.67%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-10-01 14:17](#error-2025-10-01t1417320000) |  | dev | 2.08s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 4 seconds
- 2025-09-04 PASS 10 seconds
- 2025-09-05 PASS 8 seconds
- 2025-09-06 PASS 2 seconds
- 2025-09-07 PASS a second
- 2025-09-08
  - PASS 3 seconds
  - PASS 4 seconds
  - PASS 3 seconds
- 2025-09-09 PASS 9 seconds
- 2025-09-10 PASS 8 seconds
- 2025-09-11 PASS 3 seconds
- 2025-09-12 PASS 5 seconds
- 2025-09-13 PASS 8 seconds
- 2025-09-14 PASS 2 seconds
- 2025-09-15
  - PASS 9 seconds
  - PASS 2 seconds
- 2025-09-16 PASS 11 seconds
- 2025-09-17 PASS 3 seconds
- 2025-09-18 PASS 3 seconds
- 2025-09-19 PASS 11 seconds
- 2025-09-20 PASS 3 seconds
- 2025-09-21 PASS 3 seconds
- 2025-09-22 PASS 10 seconds
- 2025-09-23 PASS 10 seconds
- 2025-09-24 PASS 9 seconds
- 2025-09-25 PASS 3 seconds
- 2025-09-26 PASS 9 seconds
- 2025-09-27 PASS 5 seconds
- 2025-09-28 PASS 10 seconds
- 2025-09-29 PASS 9 seconds
- 2025-09-30
  - PASS 3 seconds
  - PASS 7 seconds
  - PASS 10 seconds
- 2025-10-01
  - PASS 3 seconds
  - PASS 12 seconds
  - PASS 11 seconds
  - PASS 10 seconds
  - PASS 9 seconds
  - PASS 4 seconds
  - PASS 3 seconds
  - FAIL 2 seconds

### Error 2025-10-01T14:17:32+00:00
```
2025-10-01T14:17:32.6883918Z === RUN   TestAccConfigRSOrganization_import
2025-10-01T14:17:32.6885324Z === CONT  TestAccConfigRSOrganization_import
2025-10-01T14:17:32.6895447Z === NAME  TestAccConfigRSOrganization_import
2025-10-01T14:17:32.6896023Z     resource_organization_test.go:248: Step 3/3 error: Error running pre-apply plan: exit status 1
2025-10-01T14:17:32.6896461Z         
2025-10-01T14:17:32.6896845Z         Error: Unsupported block type
2025-10-01T14:17:32.6897116Z         
2025-10-01T14:17:32.6897432Z           on terraform_plugin_test.tf line 12:
2025-10-01T14:17:32.6897762Z           12: 		removed {
2025-10-01T14:17:32.6897994Z         
2025-10-01T14:17:32.6898421Z         Blocks of type "removed" are not expected here. Did you mean "moved"?
2025-10-01T14:17:32.6902664Z    test_working_directory=/tmp/plugintest1439813327 test_name=TestAccConfigRSOrganization_import test_step_number=3
2025-10-01T14:17:32.6903436Z     panic.go:615: Error retrieving state, there may be dangling resources: exit status 1
2025-10-01T14:17:32.6903842Z         
2025-10-01T14:17:32.6904128Z         Error: Unsupported block type
2025-10-01T14:17:32.6904398Z         
2025-10-01T14:17:32.6904705Z           on terraform_plugin_test.tf line 12:
2025-10-01T14:17:32.6905031Z           12: 		removed {
2025-10-01T14:17:32.6905262Z         
2025-10-01T14:17:32.6905700Z         Blocks of type "removed" are not expected here. Did you mean "moved"?
2025-10-01T14:17:32.6906301Z --- FAIL: TestAccConfigRSOrganization_import (2.77s)
```

  - PASS 11 seconds
- 2025-10-02 PASS 3 seconds
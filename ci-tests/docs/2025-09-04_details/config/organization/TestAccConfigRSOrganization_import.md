# config/organization/TestAccConfigRSOrganization_import Test Details
# Found 38 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 37) FAIL
Success rate: 97.37%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-01 16:12](#error-2025-09-01t1612420000) |  | dev | 2.09s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 10 seconds
- 2025-08-07 PASS 15 seconds
- 2025-08-08 PASS 4 seconds
- 2025-08-09 PASS 10 seconds
- 2025-08-10 PASS 11 seconds
- 2025-08-11 PASS 4 seconds
- 2025-08-12 PASS 7 seconds
- 2025-08-13 PASS 6 seconds
- 2025-08-14 PASS 9 seconds
- 2025-08-15 PASS 5 seconds
- 2025-08-16 PASS 7 seconds
- 2025-08-17 PASS 2 seconds
- 2025-08-18 PASS 10 seconds
- 2025-08-19 PASS 11 seconds
- 2025-08-20
  - PASS 10 seconds
  - PASS 10 seconds
- 2025-08-21 PASS 5 seconds
- 2025-08-22 PASS 4 seconds
- 2025-08-23 PASS 10 seconds
- 2025-08-24 PASS 2 seconds
- 2025-08-25 PASS 9 seconds
- 2025-08-26 PASS 3 seconds
- 2025-08-27 PASS 3 seconds
- 2025-08-28 PASS 3 seconds
- 2025-08-29 PASS 13 seconds
- 2025-08-30 PASS 7 seconds
- 2025-08-31 PASS 3 seconds
- 2025-09-01
  - PASS 6 seconds
  - PASS 5 seconds
  - PASS 13 seconds
  - PASS 11 seconds
  - PASS 10 seconds
  - PASS 3 seconds
  - PASS 4 seconds
  - FAIL 2 seconds

### Error 2025-09-01T16:12:42+00:00
```
2025-09-01T16:12:42.5788799Z === RUN   TestAccConfigRSOrganization_import
2025-09-01T16:12:42.5790591Z === CONT  TestAccConfigRSOrganization_import
2025-09-01T16:12:42.5803017Z === NAME  TestAccConfigRSOrganization_import
2025-09-01T16:12:42.5803689Z     resource_organization_test.go:215: Step 3/3 error: Error running pre-apply plan: exit status 1
2025-09-01T16:12:42.5804359Z         
2025-09-01T16:12:42.5804752Z         Error: Unsupported block type
2025-09-01T16:12:42.5805133Z         
2025-09-01T16:12:42.5805546Z           on terraform_plugin_test.tf line 12:
2025-09-01T16:12:42.5806096Z           12: 		removed {
2025-09-01T16:12:42.5806442Z         
2025-09-01T16:12:42.5806967Z         Blocks of type "removed" are not expected here. Did you mean "moved"?
2025-09-01T16:12:42.5812195Z    test_step_number=3 test_name=TestAccConfigRSOrganization_import test_terraform_path=/home/runner/work/_temp/4ea461a8-cbf6-4722-b34a-f311f1315047/terraform test_working_directory=/tmp/plugintest173496199
2025-09-01T16:12:42.5813335Z     panic.go:636: Error retrieving state, there may be dangling resources: exit status 1
2025-09-01T16:12:42.5813946Z         
2025-09-01T16:12:42.5814334Z         Error: Unsupported block type
2025-09-01T16:12:42.5814710Z         
2025-09-01T16:12:42.5815123Z           on terraform_plugin_test.tf line 12:
2025-09-01T16:12:42.5815554Z           12: 		removed {
2025-09-01T16:12:42.5815896Z         
2025-09-01T16:12:42.5816423Z         Blocks of type "removed" are not expected here. Did you mean "moved"?
2025-09-01T16:12:42.5816940Z --- FAIL: TestAccConfigRSOrganization_import (2.86s)
```

- 2025-09-02 PASS 6 seconds
- 2025-09-03 PASS 4 seconds
- 2025-09-04 PASS 10 seconds
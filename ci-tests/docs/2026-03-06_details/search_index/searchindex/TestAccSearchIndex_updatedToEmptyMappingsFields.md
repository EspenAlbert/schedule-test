# search_index/searchindex/TestAccSearchIndex_updatedToEmptyMappingsFields Test Details
# Found 33 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 32) FAIL
Success rate: 96.97%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-24 00:50](#error-2026-02-24t0050170000) |  | dev | flaky_500 | 1.08s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05 PASS 8 seconds
- 2026-02-06 PASS 11 seconds
- 2026-02-07 PASS 9 seconds
- 2026-02-08: MISSING
- 2026-02-09 PASS 10 seconds
- 2026-02-10 PASS 10 seconds
- 2026-02-11 PASS 9 seconds
- 2026-02-12 PASS 9 seconds
- 2026-02-13 PASS 11 seconds
- 2026-02-14 PASS 10 seconds
- 2026-02-15: MISSING
- 2026-02-16 PASS 10 seconds
- 2026-02-17 PASS 9 seconds
- 2026-02-18 PASS 11 seconds
- 2026-02-19 PASS 10 seconds
- 2026-02-20 PASS 10 seconds
- 2026-02-21 PASS 8 seconds
- 2026-02-22: MISSING
- 2026-02-23 PASS 9 seconds
- 2026-02-24

### Error 2026-02-24T00:50:17+00:00
```
2026-02-24T00:50:17.1603924Z === RUN   TestAccSearchIndex_updatedToEmptyMappingsFields
2026-02-24T01:03:37.6549999Z === CONT  TestAccSearchIndex_updatedToEmptyMappingsFields
2026-02-24T01:03:39.2578778Z === NAME  TestAccSearchIndex_updatedToEmptyMappingsFields
2026-02-24T01:03:39.2582373Z     resource_search_index_test.go:175: Step 1/2 error: Error running apply: exit status 1
2026-02-24T01:03:39.2583200Z         
2026-02-24T01:03:39.2584405Z         Error: error creating index: (503 Service Unavailable) failed to decode response body: undefined response type
2026-02-24T01:03:39.2585338Z         
2026-02-24T01:03:39.2585878Z           with mongodbatlas_search_index.test,
2026-02-24T01:03:39.2587022Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index" "test":
2026-02-24T01:03:39.2588128Z           12: 		resource "mongodbatlas_search_index" "test" {
2026-02-24T01:03:39.2588661Z         
2026-02-24T01:03:39.2597019Z    test_name=TestAccSearchIndex_withSearchType test_working_directory=/tmp/plugintest269816393 test_step_number=1 test_terraform_path=/home/runner/work/_temp/d98ac422-78b9-46ec-a80e-7177ee0431aa/terraform
2026-02-24T01:03:39.4262661Z --- FAIL: TestAccSearchIndex_updatedToEmptyMappingsFields (1.77s)
```

- 2026-02-25 PASS 10 seconds
- 2026-02-26 PASS 10 seconds
- 2026-02-27 PASS 10 seconds
- 2026-02-28 PASS 8 seconds
- 2026-03-01: MISSING
- 2026-03-02 PASS 10 seconds
- 2026-03-03 PASS 9 seconds
- 2026-03-04 PASS 9 seconds
- 2026-03-05 PASS 9 seconds
- 2026-03-06 PASS 9 seconds

## QA Environment
### Timeline
- 2026-02-04 PASS 9 seconds
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 9 seconds
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 10 seconds
- 2026-02-16: MISSING
- 2026-02-17 PASS 9 seconds
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 10 seconds
- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 8 seconds
- 2026-03-02: MISSING
- 2026-03-03 PASS 10 seconds
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING

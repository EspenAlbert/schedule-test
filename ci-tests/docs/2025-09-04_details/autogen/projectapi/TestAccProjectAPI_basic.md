# autogen/projectapi/TestAccProjectAPI_basic Test Details
# Found 38 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 37) FAIL
Success rate: 97.37%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-01 00:32](#error-2025-09-01t0032130000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.07s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 13 seconds
- 2025-08-07 PASS 33 seconds
- 2025-08-08 PASS 7 seconds
- 2025-08-09 PASS 7 seconds
- 2025-08-10 PASS 4 seconds
- 2025-08-11 PASS 7 seconds
- 2025-08-12 PASS 7 seconds
- 2025-08-13 PASS 8 seconds
- 2025-08-14 PASS 6 seconds
- 2025-08-15 PASS 8 seconds
- 2025-08-16 PASS 9 seconds
- 2025-08-17 PASS 5 seconds
- 2025-08-18 PASS 7 seconds
- 2025-08-19 PASS 7 seconds
- 2025-08-20
  - PASS 6 seconds
  - PASS 7 seconds
- 2025-08-21 PASS 6 seconds
- 2025-08-22 PASS 9 seconds
- 2025-08-23 PASS 8 seconds
- 2025-08-24 PASS 6 seconds
- 2025-08-25 PASS 8 seconds
- 2025-08-26 PASS 6 seconds
- 2025-08-27 PASS 7 seconds
- 2025-08-28 PASS 5 seconds
- 2025-08-29 PASS 6 seconds
- 2025-08-30 PASS 8 seconds
- 2025-08-31 PASS 6 seconds
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:32:13+00:00
```
2025-09-01T00:32:13.2925923Z === RUN   TestAccProjectAPI_basic
2025-09-01T00:32:13.2926874Z === CONT  TestAccProjectAPI_basic
2025-09-01T00:32:13.2962062Z   
2025-09-01T00:32:13.2962675Z     resource_test.go:22: Step 1/4 error: Error running apply: exit status 1
2025-09-01T00:32:13.2963281Z         
2025-09-01T00:32:13.2963936Z         Error: Error calling API in Create
2025-09-01T00:32:13.2964406Z         
2025-09-01T00:32:13.2964933Z           with mongodbatlas_project_api.test,
2025-09-01T00:32:13.2966153Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project_api" "test":
2025-09-01T00:32:13.2967278Z           12: 		resource "mongodbatlas_project_api" "test" {
2025-09-01T00:32:13.2967792Z         
2025-09-01T00:32:13.2968916Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2025-09-01T00:32:13.2970238Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2025-09-01T00:32:13.2976108Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2025-09-01T00:32:13.2977181Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2025-09-01T00:32:13.2977853Z         BadRequestDetail: 
2025-09-01T00:32:13.2978305Z --- FAIL: TestAccProjectAPI_basic (0.73s)
```

  - PASS 6 seconds
  - PASS 7 seconds
  - PASS 7 seconds
  - PASS 6 seconds
  - PASS 8 seconds
  - PASS 8 seconds
  - PASS 8 seconds
- 2025-09-02 PASS 7 seconds
- 2025-09-03 PASS 7 seconds
- 2025-09-04 PASS 7 seconds
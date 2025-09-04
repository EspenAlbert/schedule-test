# project/project/TestAccProject_withInvalidLimitName Test Details
# Found 39 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 38) FAIL
Success rate: 97.44%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-01 00:34](#error-2025-09-01t0034530000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | flaky_500 | 1.09s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 7 seconds
- 2025-08-07 PASS 13 seconds
- 2025-08-08 PASS 4 seconds
- 2025-08-09 PASS 3 seconds
- 2025-08-10 PASS 4 seconds
- 2025-08-11 PASS 8 seconds
- 2025-08-12
  - PASS 4 seconds
  - PASS 4 seconds
- 2025-08-13 PASS 5 seconds
- 2025-08-14 PASS 5 seconds
- 2025-08-15 PASS 5 seconds
- 2025-08-16 PASS 5 seconds
- 2025-08-17 PASS 4 seconds
- 2025-08-18 PASS 5 seconds
- 2025-08-19 PASS 5 seconds
- 2025-08-20
  - PASS 3 seconds
  - PASS 6 seconds
- 2025-08-21 PASS 5 seconds
- 2025-08-22 PASS 4 seconds
- 2025-08-23 PASS 4 seconds
- 2025-08-24 PASS 3 seconds
- 2025-08-25 PASS 3 seconds
- 2025-08-26 PASS 6 seconds
- 2025-08-27 PASS 6 seconds
- 2025-08-28 PASS 3 seconds
- 2025-08-29 PASS 3 seconds
- 2025-08-30 PASS 4 seconds
- 2025-08-31 PASS 4 seconds
- 2025-09-01
  - FAIL a second

### Error 2025-09-01T00:34:53+00:00
```
2025-09-01T00:34:53.2457985Z === RUN   TestAccProject_withInvalidLimitName
2025-09-01T00:34:53.2464262Z === CONT  TestAccProject_withInvalidLimitName
2025-09-01T00:34:53.2549379Z === NAME  TestAccProject_withInvalidLimitName
2025-09-01T00:34:53.2550075Z     resource_project_test.go:944: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2025-09-01T00:34:53.2550583Z         
2025-09-01T00:34:53.2551158Z         Error: error creating project: test-acc-tf-p-4042416575216951109
2025-09-01T00:34:53.2551742Z         
2025-09-01T00:34:53.2552148Z           with mongodbatlas_project.test,
2025-09-01T00:34:53.2552754Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-01T00:34:53.2553291Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-01T00:34:53.2553758Z         
2025-09-01T00:34:53.2554256Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2025-09-01T00:34:53.2554900Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2025-09-01T00:34:53.2555520Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2025-09-01T00:34:53.2556128Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2025-09-01T00:34:53.2556539Z         BadRequestDetail: 
2025-09-01T00:34:53.2573003Z    test_step_number=1 test_terraform_path=/home/runner/work/_temp/fb33b513-ebaa-40af-9cae-1ded3d2fd2ee/terraform
2025-09-01T00:34:53.2712413Z --- FAIL: TestAccProject_withInvalidLimitName (1.88s)
```

  - PASS 4 seconds
  - PASS 4 seconds
  - PASS 5 seconds
  - PASS 4 seconds
  - PASS 3 seconds
  - PASS 5 seconds
  - PASS 4 seconds
- 2025-09-02 PASS 5 seconds
- 2025-09-03 PASS 4 seconds
- 2025-09-04 PASS 5 seconds
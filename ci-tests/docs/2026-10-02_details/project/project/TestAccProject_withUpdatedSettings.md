# project/project/TestAccProject_withUpdatedSettings Test Details
# Found 35 TestRuns in dev, qa from 2026-09-02 to 2026-10-02 from master branch: 1 unique tests, PASS(x 34) FAIL
Success rate: 97.14%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-09-29 10:45](#error-2026-09-29t1045040000) | USER_UNAUTHORIZED /api/atlas/v2/groups/6abb964a05da69d77cf310aa/managedSlowMs | dev | 21.03s

### Timeline
- 2026-09-01: MISSING
- 2026-09-02 PASS 33 seconds
- 2026-09-03 PASS 23 seconds
- 2026-09-04 PASS 44 seconds
- 2026-09-05 PASS 21 seconds
- 2026-09-06: MISSING
- 2026-09-07 PASS 29 seconds
- 2026-09-08 PASS 30 seconds
- 2026-09-09 PASS 41 seconds
- 2026-09-10 PASS 23 seconds
- 2026-09-11 PASS 32 seconds
- 2026-09-12 PASS 24 seconds
- 2026-09-13: MISSING
- 2026-09-14 PASS 32 seconds
- 2026-09-15 PASS 36 seconds
- 2026-09-16 PASS 39 seconds
- 2026-09-17 PASS 27 seconds
- 2026-09-18 PASS 37 seconds
- 2026-09-19 PASS 23 seconds
- 2026-09-20: MISSING
- 2026-09-21 PASS 25 seconds
- 2026-09-22 PASS 26 seconds
- 2026-09-23 PASS 25 seconds
- 2026-09-24 PASS 30 seconds
- 2026-09-25 PASS 28 seconds
- 2026-09-26 PASS 25 seconds
- 2026-09-27: MISSING
- 2026-09-28 PASS 32 seconds
- 2026-09-29
  - PASS 36 seconds
  - FAIL 21 seconds

### Error 2026-09-29T10:45:04+00:00
```
2026-09-29T10:45:04.4537971Z === RUN   TestAccProject_withUpdatedSettings
2026-09-29T10:45:04.4547987Z === CONT  TestAccProject_withUpdatedSettings
2026-09-29T10:45:04.4635324Z === NAME  TestAccProject_withUpdatedSettings
2026-09-29T10:45:04.4635994Z     resource_project_test.go:736: Step 3/4 error: Error running post-apply refresh plan: exit status 1
2026-09-29T10:45:04.4636516Z         
2026-09-29T10:45:04.4636901Z         Error: error when getting project properties
2026-09-29T10:45:04.4637248Z         
2026-09-29T10:45:04.4637615Z           with data.mongodbatlas_project.test,
2026-09-29T10:45:04.4638273Z           on terraform_plugin_test.tf line 28, in data "mongodbatlas_project" "test":
2026-09-29T10:45:04.4638876Z           28: 		data "mongodbatlas_project" "test" {
2026-09-29T10:45:04.4639210Z         
2026-09-29T10:45:04.4639721Z         error getting project (6abb964a05da69d77cf310aa): error getting project's
2026-09-29T10:45:04.4640391Z         slow operation thresholding enabled (6abb964a05da69d77cf310aa):
2026-09-29T10:45:04.4641171Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6abb964a05da69d77cf310aa/managedSlowMs
2026-09-29T10:45:04.4641957Z         GET: HTTP 401 Unauthorized (Error code: "USER_UNAUTHORIZED") Detail: Current
2026-09-29T10:45:04.4642794Z         user is not authorized to perform this action. Reason: Unauthorized. Params:
2026-09-29T10:45:04.4643300Z         [], BadRequestDetail: 
2026-09-29T10:45:04.4654237Z    test_step_number=5 test_name=TestAccProject_withTags test_terraform_path=/home/runner/work/_temp/952ca0d3-4267-48ee-b151-9e57b303513c/terraform test_working_directory=/tmp/plugintest1118851522
2026-09-29T10:45:04.4660933Z --- FAIL: TestAccProject_withUpdatedSettings (21.34s)
```

  - PASS 25 seconds
- 2026-09-30 PASS 25 seconds
- 2026-10-01 PASS 27 seconds
- 2026-10-02 PASS 37 seconds

## QA Environment
### Timeline
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
- 2026-09-05: MISSING
- 2026-09-06 PASS 36 seconds
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 24 seconds
- 2026-09-14: MISSING
- 2026-09-15: MISSING
- 2026-09-16 PASS 35 seconds
- 2026-09-17: MISSING
- 2026-09-18: MISSING
- 2026-09-19: MISSING
- 2026-09-20 PASS 29 seconds
- 2026-09-21: MISSING
- 2026-09-22: MISSING
- 2026-09-23: MISSING
- 2026-09-24: MISSING
- 2026-09-25: MISSING
- 2026-09-26: MISSING
- 2026-09-27 PASS 30 seconds
- 2026-09-28: MISSING
- 2026-09-29 PASS 39 seconds
- 2026-09-30: MISSING
- 2026-10-01: MISSING
- 2026-10-02: MISSING

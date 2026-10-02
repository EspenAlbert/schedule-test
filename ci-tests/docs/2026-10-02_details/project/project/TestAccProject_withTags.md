# project/project/TestAccProject_withTags Test Details
# Found 35 TestRuns in dev, qa from 2026-09-02 to 2026-10-02 from master branch: 1 unique tests, PASS(x 34) FAIL
Success rate: 97.14%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-09-29 10:45](#error-2026-09-29t1045040000) | USER_UNAUTHORIZED /api/atlas/v2/groups/6abb964a05da69d77cf310b1/managedSlowMs | dev | 21.03s

### Timeline
- 2026-09-01: MISSING
- 2026-09-02 PASS 50 seconds
- 2026-09-03 PASS 33 seconds
- 2026-09-04 PASS a minute
- 2026-09-05 PASS 29 seconds
- 2026-09-06: MISSING
- 2026-09-07 PASS 40 seconds
- 2026-09-08 PASS 42 seconds
- 2026-09-09 PASS 58 seconds
- 2026-09-10 PASS 34 seconds
- 2026-09-11 PASS 44 seconds
- 2026-09-12 PASS 34 seconds
- 2026-09-13: MISSING
- 2026-09-14 PASS 48 seconds
- 2026-09-15 PASS 51 seconds
- 2026-09-16 PASS 54 seconds
- 2026-09-17 PASS 34 seconds
- 2026-09-18 PASS 52 seconds
- 2026-09-19 PASS 32 seconds
- 2026-09-20: MISSING
- 2026-09-21 PASS 36 seconds
- 2026-09-22 PASS 35 seconds
- 2026-09-23 PASS 34 seconds
- 2026-09-24 PASS 39 seconds
- 2026-09-25 PASS 43 seconds
- 2026-09-26 PASS 33 seconds
- 2026-09-27: MISSING
- 2026-09-28 PASS 44 seconds
- 2026-09-29
  - PASS 50 seconds
  - FAIL 21 seconds

### Error 2026-09-29T10:45:04+00:00
```
2026-09-29T10:45:04.4544222Z === RUN   TestAccProject_withTags
2026-09-29T10:45:04.4548725Z === CONT  TestAccProject_withTags
2026-09-29T10:45:04.4611970Z === NAME  TestAccProject_withTags
2026-09-29T10:45:04.4612704Z     resource_project_test.go:1115: Step 5/8 error: Error running apply: exit status 1
2026-09-29T10:45:04.4613169Z         
2026-09-29T10:45:04.4613552Z         Error: error when getting project properties
2026-09-29T10:45:04.4613902Z         
2026-09-29T10:45:04.4614269Z           with data.mongodbatlas_project.test,
2026-09-29T10:45:04.4614922Z           on terraform_plugin_test.tf line 22, in data "mongodbatlas_project" "test":
2026-09-29T10:45:04.4615510Z           22: data "mongodbatlas_project" "test" {
2026-09-29T10:45:04.4615844Z         
2026-09-29T10:45:04.4616353Z         error getting project (6abb964a05da69d77cf310b1): error getting project's
2026-09-29T10:45:04.4617025Z         slow operation thresholding enabled (6abb964a05da69d77cf310b1):
2026-09-29T10:45:04.4617808Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6abb964a05da69d77cf310b1/managedSlowMs
2026-09-29T10:45:04.4618593Z         GET: HTTP 401 Unauthorized (Error code: "USER_UNAUTHORIZED") Detail: Current
2026-09-29T10:45:04.4619450Z         user is not authorized to perform this action. Reason: Unauthorized. Params:
2026-09-29T10:45:04.4619954Z         [], BadRequestDetail: 
2026-09-29T10:45:04.4635046Z   
2026-09-29T10:45:04.4655120Z === NAME  TestAccProject_withTags
2026-09-29T10:45:04.4655806Z     panic.go:694: Error running post-test destroy, there may be dangling resources: exit status 1
2026-09-29T10:45:04.4656318Z         
2026-09-29T10:45:04.4656786Z         Error: error when destroying resource
2026-09-29T10:45:04.4657127Z         
2026-09-29T10:45:04.4657543Z         error deleting project (6abb964a05da69d77cf310b1):
2026-09-29T10:45:04.4658200Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6abb964a05da69d77cf310b1
2026-09-29T10:45:04.4658926Z         DELETE: HTTP 401 Unauthorized (Error code: "USER_UNAUTHORIZED") Detail:
2026-09-29T10:45:04.4659649Z         Current user is not authorized to perform this action. Reason: Unauthorized.
2026-09-29T10:45:04.4660178Z         Params: [], BadRequestDetail: 
2026-09-29T10:45:04.4660531Z --- FAIL: TestAccProject_withTags (21.31s)
```

  - PASS 36 seconds
- 2026-09-30 PASS 36 seconds
- 2026-10-01 PASS 35 seconds
- 2026-10-02 PASS 55 seconds

## QA Environment
### Timeline
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
- 2026-09-05: MISSING
- 2026-09-06 PASS 53 seconds
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 33 seconds
- 2026-09-14: MISSING
- 2026-09-15: MISSING
- 2026-09-16 PASS 48 seconds
- 2026-09-17: MISSING
- 2026-09-18: MISSING
- 2026-09-19: MISSING
- 2026-09-20 PASS 41 seconds
- 2026-09-21: MISSING
- 2026-09-22: MISSING
- 2026-09-23: MISSING
- 2026-09-24: MISSING
- 2026-09-25: MISSING
- 2026-09-26: MISSING
- 2026-09-27 PASS 41 seconds
- 2026-09-28: MISSING
- 2026-09-29 PASS 55 seconds
- 2026-09-30: MISSING
- 2026-10-01: MISSING
- 2026-10-02: MISSING

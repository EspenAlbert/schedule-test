# project/project/TestAccProject_withTags Test Details
# Found 41 TestRuns in dev, qa from 2025-09-23 to 2025-10-22 from master branch: 1 unique tests, SKIP(x 27) PASS(x 13) FAIL
Success rate: 92.86%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-10-12 00:35](#error-2025-10-12t0035570000) | VALIDATION_ERROR /api/atlas/v2/groups/68eaf665454e3b49aeac41ea | qa | 8.08s

## Timeline
- 2025-09-22: MISSING
- 2025-09-23 SKIP unknown
- 2025-09-24 SKIP unknown
- 2025-09-25 SKIP unknown
- 2025-09-26 SKIP unknown
- 2025-09-27 SKIP unknown
- 2025-09-28 SKIP unknown
- 2025-09-29 SKIP unknown
- 2025-09-30
  - SKIP unknown
  - SKIP unknown
  - SKIP unknown
- 2025-10-01
  - SKIP unknown
  - SKIP unknown
  - SKIP unknown
  - SKIP unknown
  - SKIP unknown
  - SKIP unknown
  - SKIP unknown
  - SKIP unknown
- 2025-10-02 SKIP unknown
- 2025-10-03 SKIP unknown
- 2025-10-04 SKIP unknown
- 2025-10-05 SKIP unknown
- 2025-10-06 SKIP unknown
- 2025-10-07 SKIP unknown
- 2025-10-08 SKIP unknown
- 2025-10-09 SKIP unknown
- 2025-10-10 SKIP unknown
- 2025-10-11 PASS 41 seconds
- 2025-10-12

### Error 2025-10-12T00:35:57+00:00
```
2025-10-12T00:35:57.5333457Z === RUN   TestAccProject_withTags
2025-10-12T00:35:57.5338635Z === CONT  TestAccProject_withTags
2025-10-12T00:35:57.5411412Z === NAME  TestAccProject_withTags
2025-10-12T00:35:57.5412165Z     resource_project_test.go:1059: Step 2/8, expected an error with pattern, no match on: Error running apply: exit status 1
2025-10-12T00:35:57.5412685Z         
2025-10-12T00:35:57.5412964Z         Error: error in project update
2025-10-12T00:35:57.5413229Z         
2025-10-12T00:35:57.5413526Z           with mongodbatlas_project.test,
2025-10-12T00:35:57.5414119Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-10-12T00:35:57.5414658Z           12: resource "mongodbatlas_project" "test" {
2025-10-12T00:35:57.5414947Z         
2025-10-12T00:35:57.5415376Z         error updating project (68eaf665454e3b49aeac41ea): error updating the
2025-10-12T00:35:57.5415833Z         project(68eaf665454e3b49aeac41ea):
2025-10-12T00:35:57.5416371Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68eaf665454e3b49aeac41ea
2025-10-12T00:35:57.5416991Z         PATCH: HTTP 400 Bad Request (Error code: "VALIDATION_ERROR") Detail: The
2025-10-12T00:35:57.5417897Z         request content produced the validation error: The request parameters are not
2025-10-12T00:35:57.5418566Z         valid.. Reason: Bad Request. Params: [The request parameters are not valid.],
2025-10-12T00:35:57.5419046Z         BadRequestDetail: 
2025-10-12T00:35:57.5429846Z --- FAIL: TestAccProject_withTags (8.80s)
```

- 2025-10-13 PASS 38 seconds
- 2025-10-14 PASS a minute
- 2025-10-15 PASS 36 seconds
- 2025-10-16 PASS a minute
- 2025-10-17 PASS 57 seconds
- 2025-10-18 PASS 50 seconds
- 2025-10-19 PASS 3 minutes
- 2025-10-20
  - PASS 34 seconds
  - PASS 45 seconds
- 2025-10-21 PASS 47 seconds
- 2025-10-22
  - PASS a minute
  - PASS 54 seconds
# project/project/TestAccProject_withTags Test Details
# Found 31 TestRuns in dev, qa from 2025-10-06 to 2025-11-04 from master branch: 1 unique tests, PASS(x 24) SKIP(x 5) FAIL(x 2)
Success rate: 92.31%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-12 00:35](#error-2025-10-12t0035570000) | VALIDATION_ERROR /api/atlas/v2/groups/68eaf665454e3b49aeac41ea | qa |  | 8.08s
[2025-10-30 00:31](#error-2025-10-30t0031580000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6902b11ee2dc7470847bab59 | dev | flaky_500 | 37.06s

## Timeline
- 2025-10-05: MISSING
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
- 2025-10-23 PASS 51 seconds
- 2025-10-24 PASS a minute
- 2025-10-25 PASS 49 seconds
- 2025-10-26 PASS 40 seconds
- 2025-10-27 PASS a minute
- 2025-10-28 PASS 39 seconds
- 2025-10-29 PASS 43 seconds
- 2025-10-30

### Error 2025-10-30T00:31:58+00:00
```
2025-10-30T00:31:58.1675601Z === RUN   TestAccProject_withTags
2025-10-30T00:31:58.1677829Z === CONT  TestAccProject_withTags
2025-10-30T00:31:58.1885159Z === NAME  TestAccProject_withTags
2025-10-30T00:31:58.1885778Z     resource_project_test.go:1060: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-30T00:31:58.1886260Z         
2025-10-30T00:31:58.1886559Z         Error: error when destroying resource
2025-10-30T00:31:58.1886838Z         
2025-10-30T00:31:58.1887174Z         error deleting project (6902b11ee2dc7470847bab59):
2025-10-30T00:31:58.1887755Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6902b11ee2dc7470847bab59
2025-10-30T00:31:58.1888542Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-10-30T00:31:58.1889158Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-10-30T00:31:58.1889571Z         BadRequestDetail: 
2025-10-30T00:31:58.1889844Z --- FAIL: TestAccProject_withTags (37.60s)
```

- 2025-10-31 PASS 59 seconds
- 2025-11-01: MISSING
- 2025-11-02 PASS 27 seconds
- 2025-11-03 PASS 39 seconds
- 2025-11-04 PASS 47 seconds
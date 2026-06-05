# project/project/TestAccProject_withUpdatedRole Test Details
# Found 31 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 24) FAIL(x 7)
Success rate: 77.42%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 00:56](#error-2026-05-09t0056550000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 71.10s
[2026-05-12 00:59](#error-2026-05-12t0059160000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 65.01s
[2026-05-14 01:05](#error-2026-05-14t0105490000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 73.08s
[2026-05-23 01:02](#error-2026-05-23t0102270000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 69.09s
[2026-05-28 00:58](#error-2026-05-28t0058340000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 69.06s
[2026-06-02 01:12](#error-2026-06-02t0112190000) |  | dev |  | 200.08s
[2026-06-04 01:19](#error-2026-06-04t0119530000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 67.10s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS 49 seconds
  - PASS 21 seconds
- 2026-05-08 PASS 16 seconds
- 2026-05-09

### Error 2026-05-09T00:56:55+00:00
```
2026-05-09T00:56:55.2661459Z === RUN   TestAccProject_withUpdatedRole
2026-05-09T00:56:55.2669562Z === CONT  TestAccProject_withUpdatedRole
2026-05-09T00:56:55.2738324Z === NAME  TestAccProject_withUpdatedRole
2026-05-09T00:56:55.2738835Z     resource_project_test.go:791: Step 1/2 error: Error running apply: exit status 1
2026-05-09T00:56:55.2739235Z         
2026-05-09T00:56:55.2739648Z         Error: error creating project: test-acc-tf-p-7342247858994596969
2026-05-09T00:56:55.2740092Z         
2026-05-09T00:56:55.2740628Z           with mongodbatlas_project.test,
2026-05-09T00:56:55.2741432Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-09T00:56:55.2742008Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-09T00:56:55.2742318Z         
2026-05-09T00:56:55.2742785Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-09T00:56:55.2743426Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-09T00:56:55.2744023Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T00:56:55.2744429Z --- FAIL: TestAccProject_withUpdatedRole (71.98s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 11 seconds
- 2026-05-12

### Error 2026-05-12T00:59:16+00:00
```
2026-05-12T00:59:16.8634017Z === RUN   TestAccProject_withUpdatedRole
2026-05-12T00:59:16.8643240Z === CONT  TestAccProject_withUpdatedRole
2026-05-12T00:59:16.8695965Z === NAME  TestAccProject_withUpdatedRole
2026-05-12T00:59:16.8696774Z     resource_project_test.go:791: Step 1/2 error: Error running apply: exit status 1
2026-05-12T00:59:16.8697371Z         
2026-05-12T00:59:16.8698024Z         Error: error creating project: test-acc-tf-p-9121024143652204300
2026-05-12T00:59:16.8698575Z         
2026-05-12T00:59:16.8699039Z           with mongodbatlas_project.test,
2026-05-12T00:59:16.8700059Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-12T00:59:16.8700671Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-12T00:59:16.8700994Z         
2026-05-12T00:59:16.8701529Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-12T00:59:16.8702187Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-12T00:59:16.8702975Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-12T00:59:16.8703419Z --- FAIL: TestAccProject_withUpdatedRole (65.10s)
```

- 2026-05-13 PASS 13 seconds
- 2026-05-14

### Error 2026-05-14T01:05:49+00:00
```
2026-05-14T01:05:49.3900094Z === RUN   TestAccProject_withUpdatedRole
2026-05-14T01:05:49.3909001Z === CONT  TestAccProject_withUpdatedRole
2026-05-14T01:05:49.3958529Z === NAME  TestAccProject_withUpdatedRole
2026-05-14T01:05:49.3959061Z     resource_project_test.go:791: Step 1/2 error: Error running apply: exit status 1
2026-05-14T01:05:49.3959471Z         
2026-05-14T01:05:49.3960051Z         Error: error creating project: test-acc-tf-p-6694629764682214857
2026-05-14T01:05:49.3960446Z         
2026-05-14T01:05:49.3960744Z           with mongodbatlas_project.test,
2026-05-14T01:05:49.3961492Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-14T01:05:49.3962084Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-14T01:05:49.3962393Z         
2026-05-14T01:05:49.3962870Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-14T01:05:49.3963511Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-14T01:05:49.3964103Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-14T01:05:49.3964514Z --- FAIL: TestAccProject_withUpdatedRole (73.79s)
```

- 2026-05-15 PASS 13 seconds
- 2026-05-16 PASS 27 seconds
- 2026-05-17: MISSING
- 2026-05-18 PASS 11 seconds
- 2026-05-19 PASS 38 seconds
- 2026-05-20 PASS 17 seconds
- 2026-05-21 PASS 43 seconds
- 2026-05-22 PASS 13 seconds
- 2026-05-23

### Error 2026-05-23T01:02:27+00:00
```
2026-05-23T01:02:27.0940309Z === RUN   TestAccProject_withUpdatedRole
2026-05-23T01:02:27.0950820Z === CONT  TestAccProject_withUpdatedRole
2026-05-23T01:02:27.1003961Z === NAME  TestAccProject_withUpdatedRole
2026-05-23T01:02:27.1004482Z     resource_project_test.go:791: Step 1/2 error: Error running apply: exit status 1
2026-05-23T01:02:27.1004896Z         
2026-05-23T01:02:27.1005317Z         Error: error creating project: test-acc-tf-p-448156806672418262
2026-05-23T01:02:27.1005682Z         
2026-05-23T01:02:27.1006279Z           with mongodbatlas_project.test,
2026-05-23T01:02:27.1006902Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-23T01:02:27.1007488Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-23T01:02:27.1007794Z         
2026-05-23T01:02:27.1008275Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-23T01:02:27.1008933Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-23T01:02:27.1009526Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:02:27.1009940Z --- FAIL: TestAccProject_withUpdatedRole (69.93s)
```

- 2026-05-24: MISSING
- 2026-05-25 PASS 13 seconds
- 2026-05-26 PASS 46 seconds
- 2026-05-27 PASS 13 seconds
- 2026-05-28

### Error 2026-05-28T00:58:34+00:00
```
2026-05-28T00:58:34.1598883Z === RUN   TestAccProject_withUpdatedRole
2026-05-28T00:58:34.1604896Z === CONT  TestAccProject_withUpdatedRole
2026-05-28T00:58:34.1727626Z === NAME  TestAccProject_withUpdatedRole
2026-05-28T00:58:34.1728154Z     resource_project_test.go:791: Step 1/2 error: Error running apply: exit status 1
2026-05-28T00:58:34.1728566Z         
2026-05-28T00:58:34.1728991Z         Error: error creating project: test-acc-tf-p-1050311349740425299
2026-05-28T00:58:34.1729367Z         
2026-05-28T00:58:34.1729672Z           with mongodbatlas_project.test,
2026-05-28T00:58:34.1730414Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-28T00:58:34.1731000Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-28T00:58:34.1731318Z         
2026-05-28T00:58:34.1731795Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-28T00:58:34.1732452Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-28T00:58:34.1733059Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T00:58:34.1733477Z --- FAIL: TestAccProject_withUpdatedRole (69.64s)
```

- 2026-05-29 PASS 13 seconds
- 2026-05-30 PASS 46 seconds
- 2026-05-31: MISSING
- 2026-06-01 PASS 12 seconds
- 2026-06-02

### Error 2026-06-02T01:12:19+00:00
```
2026-06-02T01:12:19.2433293Z === RUN   TestAccProject_withUpdatedRole
2026-06-02T01:12:19.2443864Z === CONT  TestAccProject_withUpdatedRole
2026-06-02T01:12:19.2730566Z === NAME  TestAccProject_withUpdatedRole
2026-06-02T01:12:19.2731599Z     resource_project_test.go:791: Step 1/2 error: Error running apply: exit status 1
2026-06-02T01:12:19.2732320Z         
2026-06-02T01:12:19.2733047Z         Error: error creating project: test-acc-tf-p-7779460653004834385
2026-06-02T01:12:19.2733683Z         
2026-06-02T01:12:19.2734212Z           with mongodbatlas_project.test,
2026-06-02T01:12:19.2735264Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-06-02T01:12:19.2736254Z           12: 		resource "mongodbatlas_project" "test" {
2026-06-02T01:12:19.2736788Z         
2026-06-02T01:12:19.2737530Z         Post "https://cloud-dev.mongodb.com/api/atlas/v2/groups": read tcp
2026-06-02T01:12:19.2738491Z         10.1.0.154:41726->3.228.247.77:443: read: connection timed out
2026-06-02T01:12:19.2741425Z --- FAIL: TestAccProject_withUpdatedRole (200.78s)
```

- 2026-06-03 PASS 12 seconds
- 2026-06-04

### Error 2026-06-04T01:19:53+00:00
```
2026-06-04T01:19:53.1741780Z === RUN   TestAccProject_withUpdatedRole
2026-06-04T01:19:53.1749992Z === CONT  TestAccProject_withUpdatedRole
2026-06-04T01:19:53.1804293Z === NAME  TestAccProject_withUpdatedRole
2026-06-04T01:19:53.1804908Z     resource_project_test.go:791: Step 1/2 error: Error running apply: exit status 1
2026-06-04T01:19:53.1805372Z         
2026-06-04T01:19:53.1805838Z         Error: error creating project: test-acc-tf-p-3921493596123140804
2026-06-04T01:19:53.1806260Z         
2026-06-04T01:19:53.1806604Z           with mongodbatlas_project.test,
2026-06-04T01:19:53.1807408Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-06-04T01:19:53.1808039Z           12: 		resource "mongodbatlas_project" "test" {
2026-06-04T01:19:53.1808388Z         
2026-06-04T01:19:53.1808908Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-06-04T01:19:53.1809614Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-06-04T01:19:53.1810256Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-04T01:19:53.1810715Z --- FAIL: TestAccProject_withUpdatedRole (67.97s)
```

- 2026-06-05 PASS 13 seconds

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 12 seconds
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 17 seconds
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 16 seconds
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 17 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING

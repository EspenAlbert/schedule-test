# project/project/TestAccProject_withInvalidLimitNameOnUpdate Test Details
# Found 31 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 22) FAIL(x 9)
Success rate: 70.97%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 00:56](#error-2026-05-09t0056550000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 95.03s
[2026-05-16 00:55](#error-2026-05-16t0055420000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 70.07s
[2026-05-19 01:03](#error-2026-05-19t0103150000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 66.05s
[2026-05-21 01:04](#error-2026-05-21t0104310000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.00s
[2026-05-23 01:02](#error-2026-05-23t0102270000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 68.03s
[2026-05-26 02:10](#error-2026-05-26t0210570000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 89.01s
[2026-05-28 00:58](#error-2026-05-28t0058340000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 86.06s
[2026-05-30 01:02](#error-2026-05-30t0102110000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 72.03s
[2026-06-02 01:12](#error-2026-06-02t0112190000) |  | dev |  | 261.01s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS a minute
  - PASS 22 seconds
- 2026-05-08 PASS 17 seconds
- 2026-05-09

### Error 2026-05-09T00:56:55+00:00
```
2026-05-09T00:56:55.2666586Z === RUN   TestAccProject_withInvalidLimitNameOnUpdate
2026-05-09T00:56:55.2672109Z === CONT  TestAccProject_withInvalidLimitNameOnUpdate
2026-05-09T00:56:55.2807936Z === NAME  TestAccProject_withInvalidLimitNameOnUpdate
2026-05-09T00:56:55.2808478Z     resource_project_test.go:1021: Step 1/2 error: Error running apply: exit status 1
2026-05-09T00:56:55.2808883Z         
2026-05-09T00:56:55.2809290Z         Error: error creating project: test-acc-tf-p-8297195329225225638
2026-05-09T00:56:55.2809798Z         
2026-05-09T00:56:55.2810095Z           with mongodbatlas_project.test,
2026-05-09T00:56:55.2810693Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-09T00:56:55.2811265Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-09T00:56:55.2811562Z         
2026-05-09T00:56:55.2812023Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-09T00:56:55.2812668Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-09T00:56:55.2813250Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T00:56:55.2813706Z --- FAIL: TestAccProject_withInvalidLimitNameOnUpdate (95.33s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 11 seconds
- 2026-05-12 PASS 36 seconds
- 2026-05-13 PASS 12 seconds
- 2026-05-14 PASS 44 seconds
- 2026-05-15 PASS 11 seconds
- 2026-05-16

### Error 2026-05-16T00:55:42+00:00
```
2026-05-16T00:55:42.7292113Z === RUN   TestAccProject_withInvalidLimitNameOnUpdate
2026-05-16T00:55:42.7297668Z === CONT  TestAccProject_withInvalidLimitNameOnUpdate
2026-05-16T00:55:42.7367353Z === NAME  TestAccProject_withInvalidLimitNameOnUpdate
2026-05-16T00:55:42.7367897Z     resource_project_test.go:1021: Step 1/2 error: Error running apply: exit status 1
2026-05-16T00:55:42.7368297Z         
2026-05-16T00:55:42.7368869Z         Error: error creating project: test-acc-tf-p-5224036910557849159
2026-05-16T00:55:42.7369228Z         
2026-05-16T00:55:42.7369544Z           with mongodbatlas_project.test,
2026-05-16T00:55:42.7370162Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-16T00:55:42.7370731Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-16T00:55:42.7371040Z         
2026-05-16T00:55:42.7371507Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-16T00:55:42.7372155Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-16T00:55:42.7372754Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T00:55:42.7373204Z --- FAIL: TestAccProject_withInvalidLimitNameOnUpdate (70.74s)
```

- 2026-05-17: MISSING
- 2026-05-18 PASS 12 seconds
- 2026-05-19

### Error 2026-05-19T01:03:15+00:00
```
2026-05-19T01:03:15.0636650Z === RUN   TestAccProject_withInvalidLimitNameOnUpdate
2026-05-19T01:03:15.0641143Z === CONT  TestAccProject_withInvalidLimitNameOnUpdate
2026-05-19T01:03:15.0688022Z === NAME  TestAccProject_withInvalidLimitNameOnUpdate
2026-05-19T01:03:15.0688618Z     resource_project_test.go:1021: Step 1/2 error: Error running apply: exit status 1
2026-05-19T01:03:15.0689061Z         
2026-05-19T01:03:15.0689506Z         Error: error creating project: test-acc-tf-p-6200446387921517964
2026-05-19T01:03:15.0689886Z         
2026-05-19T01:03:15.0690206Z           with mongodbatlas_project.test,
2026-05-19T01:03:15.0691011Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-19T01:03:15.0691610Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-19T01:03:15.0691961Z         
2026-05-19T01:03:15.0692455Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-19T01:03:15.0693111Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-19T01:03:15.0693709Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:03:15.0694189Z --- FAIL: TestAccProject_withInvalidLimitNameOnUpdate (66.53s)
```

- 2026-05-20 PASS 16 seconds
- 2026-05-21

### Error 2026-05-21T01:04:31+00:00
```
2026-05-21T01:04:31.9152603Z === RUN   TestAccProject_withInvalidLimitNameOnUpdate
2026-05-21T01:04:31.9156726Z === CONT  TestAccProject_withInvalidLimitNameOnUpdate
2026-05-21T01:04:31.9188291Z === NAME  TestAccProject_withInvalidLimitNameOnUpdate
2026-05-21T01:04:31.9188855Z     resource_project_test.go:1021: Step 1/2 error: Error running apply: exit status 1
2026-05-21T01:04:31.9189270Z         
2026-05-21T01:04:31.9189689Z         Error: error creating project: test-acc-tf-p-3236953978002717380
2026-05-21T01:04:31.9190056Z         
2026-05-21T01:04:31.9190578Z           with mongodbatlas_project.test,
2026-05-21T01:04:31.9191195Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-21T01:04:31.9191769Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-21T01:04:31.9192073Z         
2026-05-21T01:04:31.9192542Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-21T01:04:31.9193191Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-21T01:04:31.9193781Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:04:31.9194236Z --- FAIL: TestAccProject_withInvalidLimitNameOnUpdate (64.01s)
```

- 2026-05-22 PASS 14 seconds
- 2026-05-23

### Error 2026-05-23T01:02:27+00:00
```
2026-05-23T01:02:27.0945331Z === RUN   TestAccProject_withInvalidLimitNameOnUpdate
2026-05-23T01:02:27.0948685Z === CONT  TestAccProject_withInvalidLimitNameOnUpdate
2026-05-23T01:02:27.0986487Z === NAME  TestAccProject_withInvalidLimitNameOnUpdate
2026-05-23T01:02:27.0987062Z     resource_project_test.go:1021: Step 1/2 error: Error running apply: exit status 1
2026-05-23T01:02:27.0987484Z         
2026-05-23T01:02:27.0987908Z         Error: error creating project: test-acc-tf-p-7943807244952693647
2026-05-23T01:02:27.0988285Z         
2026-05-23T01:02:27.0988589Z           with mongodbatlas_project.test,
2026-05-23T01:02:27.0989202Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-23T01:02:27.0989932Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-23T01:02:27.0990237Z         
2026-05-23T01:02:27.0990711Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-23T01:02:27.0991366Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-23T01:02:27.0991957Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:02:27.0992424Z --- FAIL: TestAccProject_withInvalidLimitNameOnUpdate (68.32s)
```

- 2026-05-24: MISSING
- 2026-05-25 PASS 11 seconds
- 2026-05-26

### Error 2026-05-26T02:10:57+00:00
```
2026-05-26T02:10:57.1898194Z === RUN   TestAccProject_withInvalidLimitNameOnUpdate
2026-05-26T02:10:57.1901561Z === CONT  TestAccProject_withInvalidLimitNameOnUpdate
2026-05-26T02:10:57.2059517Z === NAME  TestAccProject_withInvalidLimitNameOnUpdate
2026-05-26T02:10:57.2060057Z     resource_project_test.go:1021: Step 1/2 error: Error running apply: exit status 1
2026-05-26T02:10:57.2060466Z         
2026-05-26T02:10:57.2060874Z         Error: error creating project: test-acc-tf-p-702974792326244456
2026-05-26T02:10:57.2061224Z         
2026-05-26T02:10:57.2061522Z           with mongodbatlas_project.test,
2026-05-26T02:10:57.2062134Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-26T02:10:57.2062710Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-26T02:10:57.2063004Z         
2026-05-26T02:10:57.2063478Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-26T02:10:57.2064122Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-26T02:10:57.2064710Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-26T02:10:57.2065162Z --- FAIL: TestAccProject_withInvalidLimitNameOnUpdate (89.13s)
```

- 2026-05-27 PASS 13 seconds
- 2026-05-28

### Error 2026-05-28T00:58:34+00:00
```
2026-05-28T00:58:34.1602593Z === RUN   TestAccProject_withInvalidLimitNameOnUpdate
2026-05-28T00:58:34.1607390Z === CONT  TestAccProject_withInvalidLimitNameOnUpdate
2026-05-28T00:58:34.1766646Z === NAME  TestAccProject_withInvalidLimitNameOnUpdate
2026-05-28T00:58:34.1767457Z     resource_project_test.go:1021: Step 1/2 error: Error running apply: exit status 1
2026-05-28T00:58:34.1767903Z         
2026-05-28T00:58:34.1768327Z         Error: error creating project: test-acc-tf-p-4602807950873917496
2026-05-28T00:58:34.1768701Z         
2026-05-28T00:58:34.1769012Z           with mongodbatlas_project.test,
2026-05-28T00:58:34.1769633Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-28T00:58:34.1770212Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-28T00:58:34.1770526Z         
2026-05-28T00:58:34.1771009Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-28T00:58:34.1771665Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-28T00:58:34.1772270Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T00:58:34.1772882Z --- FAIL: TestAccProject_withInvalidLimitNameOnUpdate (86.62s)
```

- 2026-05-29 PASS 12 seconds
- 2026-05-30

### Error 2026-05-30T01:02:11+00:00
```
2026-05-30T01:02:11.3452774Z === RUN   TestAccProject_withInvalidLimitNameOnUpdate
2026-05-30T01:02:11.3455856Z === CONT  TestAccProject_withInvalidLimitNameOnUpdate
2026-05-30T01:02:11.3535981Z === NAME  TestAccProject_withInvalidLimitNameOnUpdate
2026-05-30T01:02:11.3536579Z     resource_project_test.go:1021: Step 1/2 error: Error running apply: exit status 1
2026-05-30T01:02:11.3537024Z         
2026-05-30T01:02:11.3537471Z         Error: error creating project: test-acc-tf-p-3120132321069504078
2026-05-30T01:02:11.3537861Z         
2026-05-30T01:02:11.3538222Z           with mongodbatlas_project.test,
2026-05-30T01:02:11.3538863Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-30T01:02:11.3539467Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-30T01:02:11.3539938Z         
2026-05-30T01:02:11.3540447Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-30T01:02:11.3541145Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-30T01:02:11.3541779Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:02:11.3542260Z --- FAIL: TestAccProject_withInvalidLimitNameOnUpdate (72.30s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS 13 seconds
- 2026-06-02

### Error 2026-06-02T01:12:19+00:00
```
2026-06-02T01:12:19.2439232Z === RUN   TestAccProject_withInvalidLimitNameOnUpdate
2026-06-02T01:12:19.2446371Z === CONT  TestAccProject_withInvalidLimitNameOnUpdate
2026-06-02T01:12:19.2758768Z === NAME  TestAccProject_withInvalidLimitNameOnUpdate
2026-06-02T01:12:19.2759721Z     resource_project_test.go:1021: Step 1/2 error: Error running apply: exit status 1
2026-06-02T01:12:19.2760423Z         
2026-06-02T01:12:19.2761293Z         Error: error creating project: test-acc-tf-p-7696010266443211424
2026-06-02T01:12:19.2761934Z         
2026-06-02T01:12:19.2762685Z           with mongodbatlas_project.test,
2026-06-02T01:12:19.2763885Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-06-02T01:12:19.2765282Z           12: 		resource "mongodbatlas_project" "test" {
2026-06-02T01:12:19.2766031Z         
2026-06-02T01:12:19.2767098Z         Post "https://cloud-dev.mongodb.com/api/atlas/v2/groups": read tcp
2026-06-02T01:12:19.2768279Z         10.1.0.154:41712->3.228.247.77:443: read: connection timed out
2026-06-02T01:12:19.2769322Z --- FAIL: TestAccProject_withInvalidLimitNameOnUpdate (261.12s)
```

- 2026-06-03 PASS 12 seconds
- 2026-06-04 PASS 39 seconds
- 2026-06-05 PASS 12 seconds

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 13 seconds
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
- 2026-05-31 PASS 18 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING

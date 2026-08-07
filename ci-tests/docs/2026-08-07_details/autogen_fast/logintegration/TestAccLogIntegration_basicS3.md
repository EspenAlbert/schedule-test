# autogen_fast/logintegration/TestAccLogIntegration_basicS3 Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 27) FAIL(x 5)
Success rate: 84.38%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:57](#error-2026-07-09t0057030000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 66.02s
[2026-07-11 00:54](#error-2026-07-11t0054310000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 95.03s
[2026-07-18 00:49](#error-2026-07-18t0049420000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.09s
[2026-07-21 00:53](#error-2026-07-21t0053050000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 71.05s
[2026-07-23 00:48](#error-2026-07-23t0048360000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.09s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:57:03+00:00
```
2026-07-09T00:57:03.9576435Z === RUN   TestAccLogIntegration_basicS3
2026-07-09T00:57:03.9577428Z     resource_test.go:73: Creating execution project (1): test-acc-tf-p-6557892408246902497
2026-07-09T00:57:03.9578194Z     resource_test.go:73: 
2026-07-09T00:57:03.9579823Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:57:03.9582471Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T00:57:03.9585087Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T00:57:03.9587986Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/logintegration/resource_test.go:73
2026-07-09T00:57:03.9589499Z         	Error:      	Received unexpected error:
2026-07-09T00:57:03.9592285Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:57:03.9593813Z         	Test:       	TestAccLogIntegration_basicS3
2026-07-09T00:57:03.9595728Z         	Messages:   	Project creation failed: test-acc-tf-p-6557892408246902497, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:57:03.9596952Z --- FAIL: TestAccLogIntegration_basicS3 (66.21s)
```

- 2026-07-10 PASS a minute
- 2026-07-11

### Error 2026-07-11T00:54:31+00:00
```
2026-07-11T00:54:31.1494002Z === RUN   TestAccLogIntegration_basicS3
2026-07-11T00:54:31.1494630Z     resource_test.go:73: Creating execution project (1): test-acc-tf-p-7420175795548585160
2026-07-11T00:54:31.1495173Z     resource_test.go:73: 
2026-07-11T00:54:31.1496289Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T00:54:31.1498194Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T00:54:31.1500082Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T00:54:31.1502346Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/logintegration/resource_test.go:73
2026-07-11T00:54:31.1503232Z         	Error:      	Received unexpected error:
2026-07-11T00:54:31.1505250Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:54:31.1506499Z         	Test:       	TestAccLogIntegration_basicS3
2026-07-11T00:54:31.1508337Z         	Messages:   	Project creation failed: test-acc-tf-p-7420175795548585160, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:54:31.1509595Z --- FAIL: TestAccLogIntegration_basicS3 (95.28s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS a minute
- 2026-07-14 PASS 2 minutes
- 2026-07-15 PASS a minute
- 2026-07-16 PASS 2 minutes
- 2026-07-17 PASS a minute
- 2026-07-18

### Error 2026-07-18T00:49:42+00:00
```
2026-07-18T00:49:42.9040096Z === RUN   TestAccLogIntegration_basicS3
2026-07-18T00:49:42.9041077Z     resource_test.go:73: Creating execution project (1): test-acc-tf-p-7529274687506559761
2026-07-18T00:49:42.9041652Z     resource_test.go:73: 
2026-07-18T00:49:42.9042971Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-18T00:49:42.9044740Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-18T00:49:42.9046690Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-18T00:49:42.9048653Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/logintegration/resource_test.go:73
2026-07-18T00:49:42.9049535Z         	Error:      	Received unexpected error:
2026-07-18T00:49:42.9051374Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:49:42.9052687Z         	Test:       	TestAccLogIntegration_basicS3
2026-07-18T00:49:42.9054386Z         	Messages:   	Project creation failed: test-acc-tf-p-7529274687506559761, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:49:42.9055952Z --- FAIL: TestAccLogIntegration_basicS3 (63.92s)
```

- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:53:05+00:00
```
2026-07-21T00:53:05.9917872Z === RUN   TestAccLogIntegration_basicS3
2026-07-21T00:53:05.9918998Z     resource_test.go:73: Creating execution project (1): test-acc-tf-p-974506036815222114
2026-07-21T00:53:05.9919961Z     resource_test.go:73: 
2026-07-21T00:53:05.9921589Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:53:05.9926213Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:53:05.9928089Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:53:05.9930065Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/logintegration/resource_test.go:73
2026-07-21T00:53:05.9930957Z         	Error:      	Received unexpected error:
2026-07-21T00:53:05.9933197Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:53:05.9934320Z         	Test:       	TestAccLogIntegration_basicS3
2026-07-21T00:53:05.9936484Z         	Messages:   	Project creation failed: test-acc-tf-p-974506036815222114, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:53:05.9937736Z --- FAIL: TestAccLogIntegration_basicS3 (71.47s)
```

- 2026-07-22 PASS a minute
- 2026-07-23

### Error 2026-07-23T00:48:36+00:00
```
2026-07-23T00:48:36.9096346Z === RUN   TestAccLogIntegration_basicS3
2026-07-23T00:48:36.9096824Z     resource_test.go:73: Creating execution project (1): test-acc-tf-p-2202487525276646843
2026-07-23T00:48:36.9097240Z     resource_test.go:73: 
2026-07-23T00:48:36.9097982Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:48:36.9099409Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T00:48:36.9100934Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T00:48:36.9102462Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/logintegration/resource_test.go:73
2026-07-23T00:48:36.9103246Z         	Error:      	Received unexpected error:
2026-07-23T00:48:36.9104810Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:48:36.9105619Z         	Test:       	TestAccLogIntegration_basicS3
2026-07-23T00:48:36.9107007Z         	Messages:   	Project creation failed: test-acc-tf-p-2202487525276646843, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:48:36.9107927Z --- FAIL: TestAccLogIntegration_basicS3 (61.88s)
```

- 2026-07-24 PASS a minute
- 2026-07-25 PASS a minute
- 2026-07-26: MISSING
- 2026-07-27 PASS a minute
- 2026-07-28 PASS a minute
- 2026-07-29 PASS a minute
- 2026-07-30 PASS a minute
- 2026-07-31 PASS a minute
- 2026-08-01 PASS a minute
- 2026-08-02: MISSING
- 2026-08-03 PASS a minute
- 2026-08-04 PASS a minute
- 2026-08-05 PASS a minute
- 2026-08-06 PASS a minute
- 2026-08-07 PASS a minute

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS a minute
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS a minute
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS a minute
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS a minute
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS a minute
  - PASS a minute
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS a minute
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING

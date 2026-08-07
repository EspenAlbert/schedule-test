# autogen_fast/logintegration/TestAccLogIntegration_basicDatadog Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 27) FAIL(x 5)
Success rate: 84.38%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:57](#error-2026-07-09t0057030000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 107.00s
[2026-07-11 00:54](#error-2026-07-11t0054310000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 81.00s
[2026-07-18 00:49](#error-2026-07-18t0049420000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 77.04s
[2026-07-21 00:53](#error-2026-07-21t0053050000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 90.04s
[2026-07-23 00:48](#error-2026-07-23t0048360000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.06s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:57:03+00:00
```
2026-07-09T00:57:03.9629140Z === RUN   TestAccLogIntegration_basicDatadog
2026-07-09T00:57:03.9629783Z     resource_test.go:196: Creating execution project (1): test-acc-tf-p-4122005848942497833
2026-07-09T00:57:03.9630336Z     resource_test.go:196: 
2026-07-09T00:57:03.9631301Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:57:03.9633160Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T00:57:03.9635020Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T00:57:03.9637171Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/logintegration/resource_test.go:196
2026-07-09T00:57:03.9638049Z         	Error:      	Received unexpected error:
2026-07-09T00:57:03.9640316Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:57:03.9642577Z         	Test:       	TestAccLogIntegration_basicDatadog
2026-07-09T00:57:03.9644473Z         	Messages:   	Project creation failed: test-acc-tf-p-4122005848942497833, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:57:03.9645733Z --- FAIL: TestAccLogIntegration_basicDatadog (107.02s)
```

- 2026-07-10 PASS 7 seconds
- 2026-07-11

### Error 2026-07-11T00:54:31+00:00
```
2026-07-11T00:54:31.1541629Z === RUN   TestAccLogIntegration_basicDatadog
2026-07-11T00:54:31.1542271Z     resource_test.go:196: Creating execution project (1): test-acc-tf-p-5291781588423282329
2026-07-11T00:54:31.1542830Z     resource_test.go:196: 
2026-07-11T00:54:31.1543815Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T00:54:31.1545900Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T00:54:31.1547862Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T00:54:31.1549867Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/logintegration/resource_test.go:196
2026-07-11T00:54:31.1550752Z         	Error:      	Received unexpected error:
2026-07-11T00:54:31.1552769Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:54:31.1553888Z         	Test:       	TestAccLogIntegration_basicDatadog
2026-07-11T00:54:31.1555877Z         	Messages:   	Project creation failed: test-acc-tf-p-5291781588423282329, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:54:31.1557153Z --- FAIL: TestAccLogIntegration_basicDatadog (81.00s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 8 seconds
- 2026-07-14 PASS 8 seconds
- 2026-07-15 PASS 8 seconds
- 2026-07-16 PASS 6 seconds
- 2026-07-17 PASS 8 seconds
- 2026-07-18

### Error 2026-07-18T00:49:42+00:00
```
2026-07-18T00:49:42.9088220Z === RUN   TestAccLogIntegration_basicDatadog
2026-07-18T00:49:42.9089017Z     resource_test.go:196: Creating execution project (1): test-acc-tf-p-9172428728063487487
2026-07-18T00:49:42.9089685Z     resource_test.go:196: 
2026-07-18T00:49:42.9090740Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-18T00:49:42.9092641Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-18T00:49:42.9094467Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-18T00:49:42.9096507Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/logintegration/resource_test.go:196
2026-07-18T00:49:42.9097382Z         	Error:      	Received unexpected error:
2026-07-18T00:49:42.9099110Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:49:42.9101543Z         	Test:       	TestAccLogIntegration_basicDatadog
2026-07-18T00:49:42.9103102Z         	Messages:   	Project creation failed: test-acc-tf-p-9172428728063487487, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:49:42.9104292Z --- FAIL: TestAccLogIntegration_basicDatadog (77.41s)
```

- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:53:05+00:00
```
2026-07-21T00:53:05.9970173Z === RUN   TestAccLogIntegration_basicDatadog
2026-07-21T00:53:05.9970836Z     resource_test.go:196: Creating execution project (1): test-acc-tf-p-6540343164247329580
2026-07-21T00:53:05.9971408Z     resource_test.go:196: 
2026-07-21T00:53:05.9972386Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:53:05.9974241Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:53:05.9976285Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:53:05.9978263Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/logintegration/resource_test.go:196
2026-07-21T00:53:05.9979140Z         	Error:      	Received unexpected error:
2026-07-21T00:53:05.9981299Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:53:05.9982430Z         	Test:       	TestAccLogIntegration_basicDatadog
2026-07-21T00:53:05.9984303Z         	Messages:   	Project creation failed: test-acc-tf-p-6540343164247329580, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:53:05.9985800Z --- FAIL: TestAccLogIntegration_basicDatadog (90.37s)
```

- 2026-07-22 PASS 7 seconds
- 2026-07-23

### Error 2026-07-23T00:48:36+00:00
```
2026-07-23T00:48:36.9134379Z === RUN   TestAccLogIntegration_basicDatadog
2026-07-23T00:48:36.9134881Z     resource_test.go:196: Creating execution project (1): test-acc-tf-p-4440357514708798432
2026-07-23T00:48:36.9135320Z     resource_test.go:196: 
2026-07-23T00:48:36.9136085Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:48:36.9137533Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T00:48:36.9138965Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T00:48:36.9140483Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/logintegration/resource_test.go:196
2026-07-23T00:48:36.9141166Z         	Error:      	Received unexpected error:
2026-07-23T00:48:36.9143509Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:48:36.9144627Z         	Test:       	TestAccLogIntegration_basicDatadog
2026-07-23T00:48:36.9146481Z         	Messages:   	Project creation failed: test-acc-tf-p-4440357514708798432, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:48:36.9147695Z --- FAIL: TestAccLogIntegration_basicDatadog (0.58s)
```

- 2026-07-24 PASS 7 seconds
- 2026-07-25 PASS 6 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 10 seconds
- 2026-07-28 PASS 7 seconds
- 2026-07-29 PASS 7 seconds
- 2026-07-30 PASS 7 seconds
- 2026-07-31 PASS 6 seconds
- 2026-08-01 PASS 7 seconds
- 2026-08-02: MISSING
- 2026-08-03 PASS 7 seconds
- 2026-08-04 PASS 6 seconds
- 2026-08-05 PASS 7 seconds
- 2026-08-06 PASS 6 seconds
- 2026-08-07 PASS 7 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 9 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 9 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 8 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 9 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 8 seconds
  - PASS 9 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 9 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING

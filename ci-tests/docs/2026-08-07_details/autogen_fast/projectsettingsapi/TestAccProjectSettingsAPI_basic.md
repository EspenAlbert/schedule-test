# autogen_fast/projectsettingsapi/TestAccProjectSettingsAPI_basic Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 27) FAIL(x 5)
Success rate: 84.38%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:57](#error-2026-07-09t0057290000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.10s
[2026-07-11 00:54](#error-2026-07-11t0054310000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.01s
[2026-07-18 00:50](#error-2026-07-18t0050100000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 89.04s
[2026-07-21 00:53](#error-2026-07-21t0053060000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.00s
[2026-07-23 00:48](#error-2026-07-23t0048440000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.03s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:57:29+00:00
```
2026-07-09T00:57:29.6762243Z === RUN   TestAccProjectSettingsAPI_basic
2026-07-09T00:57:29.6762855Z     resource_test.go:18: Creating execution project (1): test-acc-tf-p-6803480748480832501
2026-07-09T00:57:29.6763392Z     resource_test.go:18: 
2026-07-09T00:57:29.6764345Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:57:29.6766221Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T00:57:29.6768093Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T00:57:29.6770583Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/projectsettingsapi/resource_test.go:18
2026-07-09T00:57:29.6771597Z         	Error:      	Received unexpected error:
2026-07-09T00:57:29.6773615Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:57:29.6774712Z         	Test:       	TestAccProjectSettingsAPI_basic
2026-07-09T00:57:29.6776555Z         	Messages:   	Project creation failed: test-acc-tf-p-6803480748480832501, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:57:29.6777792Z --- FAIL: TestAccProjectSettingsAPI_basic (63.98s)
```

- 2026-07-10 PASS 6 seconds
- 2026-07-11

### Error 2026-07-11T00:54:31+00:00
```
2026-07-11T00:54:31.1848100Z === RUN   TestAccProjectSettingsAPI_basic
2026-07-11T00:54:31.1848721Z     resource_test.go:18: Creating execution project (1): test-acc-tf-p-7333622073298315726
2026-07-11T00:54:31.1849278Z     resource_test.go:18: 
2026-07-11T00:54:31.1850265Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T00:54:31.1852172Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T00:54:31.1854069Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T00:54:31.1856237Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/projectsettingsapi/resource_test.go:18
2026-07-11T00:54:31.1857143Z         	Error:      	Received unexpected error:
2026-07-11T00:54:31.1859166Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:54:31.1860279Z         	Test:       	TestAccProjectSettingsAPI_basic
2026-07-11T00:54:31.1862123Z         	Messages:   	Project creation failed: test-acc-tf-p-7333622073298315726, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:54:31.1863384Z --- FAIL: TestAccProjectSettingsAPI_basic (62.13s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 7 seconds
- 2026-07-14 PASS 11 seconds
- 2026-07-15 PASS 8 seconds
- 2026-07-16 PASS 25 seconds
- 2026-07-17 PASS 9 seconds
- 2026-07-18

### Error 2026-07-18T00:50:10+00:00
```
2026-07-18T00:50:10.8276346Z === RUN   TestAccProjectSettingsAPI_basic
2026-07-18T00:50:10.8277047Z     resource_test.go:18: Creating execution project (1): test-acc-tf-p-3679539718248723073
2026-07-18T00:50:10.8277662Z     resource_test.go:18: 
2026-07-18T00:50:10.8278584Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-18T00:50:10.8280305Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-18T00:50:10.8282146Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-18T00:50:10.8283947Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/projectsettingsapi/resource_test.go:18
2026-07-18T00:50:10.8284855Z         	Error:      	Received unexpected error:
2026-07-18T00:50:10.8286766Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:50:10.8287840Z         	Test:       	TestAccProjectSettingsAPI_basic
2026-07-18T00:50:10.8289456Z         	Messages:   	Project creation failed: test-acc-tf-p-3679539718248723073, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:50:10.8290653Z --- FAIL: TestAccProjectSettingsAPI_basic (89.39s)
```

- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:53:06+00:00
```
2026-07-21T00:53:06.0282441Z === RUN   TestAccProjectSettingsAPI_basic
2026-07-21T00:53:06.0283065Z     resource_test.go:18: Creating execution project (1): test-acc-tf-p-5603368890292408179
2026-07-21T00:53:06.0283613Z     resource_test.go:18: 
2026-07-21T00:53:06.0284596Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:53:06.0286671Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:53:06.0288549Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:53:06.0290570Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/projectsettingsapi/resource_test.go:18
2026-07-21T00:53:06.0291470Z         	Error:      	Received unexpected error:
2026-07-21T00:53:06.0293508Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:53:06.0294597Z         	Test:       	TestAccProjectSettingsAPI_basic
2026-07-21T00:53:06.0296642Z         	Messages:   	Project creation failed: test-acc-tf-p-5603368890292408179, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:53:06.0297865Z --- FAIL: TestAccProjectSettingsAPI_basic (63.02s)
```

- 2026-07-22 PASS 7 seconds
- 2026-07-23

### Error 2026-07-23T00:48:44+00:00
```
2026-07-23T00:48:44.7235483Z === RUN   TestAccProjectSettingsAPI_basic
2026-07-23T00:48:44.7235994Z     resource_test.go:18: Creating execution project (1): test-acc-tf-p-674873490484716135
2026-07-23T00:48:44.7236421Z     resource_test.go:18: 
2026-07-23T00:48:44.7237221Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:48:44.7238857Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T00:48:44.7240291Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T00:48:44.7241805Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/projectsettingsapi/resource_test.go:18
2026-07-23T00:48:44.7242495Z         	Error:      	Received unexpected error:
2026-07-23T00:48:44.7245017Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:48:44.7246159Z         	Test:       	TestAccProjectSettingsAPI_basic
2026-07-23T00:48:44.7247985Z         	Messages:   	Project creation failed: test-acc-tf-p-674873490484716135, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:48:44.7249182Z --- FAIL: TestAccProjectSettingsAPI_basic (0.28s)
```

- 2026-07-24 PASS 6 seconds
- 2026-07-25 PASS 6 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 9 seconds
- 2026-07-28 PASS 6 seconds
- 2026-07-29 PASS 6 seconds
- 2026-07-30 PASS 6 seconds
- 2026-07-31 PASS 8 seconds
- 2026-08-01 PASS 7 seconds
- 2026-08-02: MISSING
- 2026-08-03 PASS 6 seconds
- 2026-08-04 PASS 6 seconds
- 2026-08-05 PASS 7 seconds
- 2026-08-06 PASS 6 seconds
- 2026-08-07 PASS 8 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 9 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 8 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 7 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 8 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 7 seconds
  - PASS 10 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 7 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING

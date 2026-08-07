# autogen_fast/alertconfigurationapi/TestAccAlertConfigurationAPI_basic Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 26) FAIL(x 6)
Success rate: 81.25%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:53](#error-2026-07-09t0053050000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 73.01s
[2026-07-11 00:54](#error-2026-07-11t0054310000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.06s
[2026-07-14 00:45](#error-2026-07-14t0045270000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 81.00s
[2026-07-16 00:48](#error-2026-07-16t0048430000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 65.03s
[2026-07-21 00:52](#error-2026-07-21t0052270000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 68.05s
[2026-07-23 00:48](#error-2026-07-23t0048360000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.05s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:53:05+00:00
```
2026-07-09T00:53:05.4934338Z === RUN   TestAccAlertConfigurationAPI_basic
2026-07-09T00:53:05.4935583Z     resource_test.go:21: Creating execution project (1): test-acc-tf-p-1225903945720199871
2026-07-09T00:53:05.4938092Z     resource_test.go:21: 
2026-07-09T00:53:05.4940201Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:53:05.4943531Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T00:53:05.4947183Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T00:53:05.4951487Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/alertconfigurationapi/resource_test.go:21
2026-07-09T00:53:05.4953126Z         	Error:      	Received unexpected error:
2026-07-09T00:53:05.4956925Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:53:05.4959212Z         	Test:       	TestAccAlertConfigurationAPI_basic
2026-07-09T00:53:05.4962488Z         	Messages:   	Project creation failed: test-acc-tf-p-1225903945720199871, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:53:05.4964704Z --- FAIL: TestAccAlertConfigurationAPI_basic (73.08s)
```

- 2026-07-10 PASS 11 seconds
- 2026-07-11

### Error 2026-07-11T00:54:31+00:00
```
2026-07-11T00:54:31.1233145Z === RUN   TestAccAlertConfigurationAPI_basic
2026-07-11T00:54:31.1234463Z     resource_test.go:21: Creating execution project (1): test-acc-tf-p-3658709727661590966
2026-07-11T00:54:31.1235517Z     resource_test.go:21: 
2026-07-11T00:54:31.1237670Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T00:54:31.1240977Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T00:54:31.1243069Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T00:54:31.1245531Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/alertconfigurationapi/resource_test.go:21
2026-07-11T00:54:31.1247206Z         	Error:      	Received unexpected error:
2026-07-11T00:54:31.1249309Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:54:31.1250460Z         	Test:       	TestAccAlertConfigurationAPI_basic
2026-07-11T00:54:31.1252347Z         	Messages:   	Project creation failed: test-acc-tf-p-3658709727661590966, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:54:31.1253661Z --- FAIL: TestAccAlertConfigurationAPI_basic (62.64s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 12 seconds
- 2026-07-14

### Error 2026-07-14T00:45:27+00:00
```
2026-07-14T00:45:27.3228838Z === RUN   TestAccAlertConfigurationAPI_basic
2026-07-14T00:45:27.3232781Z     resource_test.go:21: Creating execution project (1): test-acc-tf-p-5137603767934407266
2026-07-14T00:45:27.3234182Z     resource_test.go:21: 
2026-07-14T00:45:27.3236557Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-14T00:45:27.3245159Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-14T00:45:27.3250586Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-14T00:45:27.3261335Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/alertconfigurationapi/resource_test.go:21
2026-07-14T00:45:27.3263734Z         	Error:      	Received unexpected error:
2026-07-14T00:45:27.3268889Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-14T00:45:27.3271932Z         	Test:       	TestAccAlertConfigurationAPI_basic
2026-07-14T00:45:27.3276425Z         	Messages:   	Project creation failed: test-acc-tf-p-5137603767934407266, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-14T00:45:27.3333281Z --- FAIL: TestAccAlertConfigurationAPI_basic (81.00s)
```

- 2026-07-15 PASS 13 seconds
- 2026-07-16

### Error 2026-07-16T00:48:43+00:00
```
2026-07-16T00:48:43.0482936Z === RUN   TestAccAlertConfigurationAPI_basic
2026-07-16T00:48:43.0491530Z     resource_test.go:21: Creating execution project (1): test-acc-tf-p-3282542666654583897
2026-07-16T00:48:43.0503009Z     resource_test.go:21: 
2026-07-16T00:48:43.0505135Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-16T00:48:43.0512801Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-16T00:48:43.0515528Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-16T00:48:43.0524011Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/alertconfigurationapi/resource_test.go:21
2026-07-16T00:48:43.0525510Z         	Error:      	Received unexpected error:
2026-07-16T00:48:43.0528572Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-16T00:48:43.0530400Z         	Test:       	TestAccAlertConfigurationAPI_basic
2026-07-16T00:48:43.0533286Z         	Messages:   	Project creation failed: test-acc-tf-p-3282542666654583897, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-16T00:48:43.0534570Z --- FAIL: TestAccAlertConfigurationAPI_basic (65.28s)
```

- 2026-07-17 PASS 12 seconds
- 2026-07-18 PASS 36 seconds
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:52:27+00:00
```
2026-07-21T00:52:27.2075890Z === RUN   TestAccAlertConfigurationAPI_basic
2026-07-21T00:52:27.2079162Z     resource_test.go:21: Creating execution project (1): test-acc-tf-p-3655010758860424128
2026-07-21T00:52:27.2080613Z     resource_test.go:21: 
2026-07-21T00:52:27.2097104Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:52:27.2100267Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:52:27.2102217Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:52:27.2104252Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/alertconfigurationapi/resource_test.go:21
2026-07-21T00:52:27.2105586Z         	Error:      	Received unexpected error:
2026-07-21T00:52:27.2107653Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:52:27.2108777Z         	Test:       	TestAccAlertConfigurationAPI_basic
2026-07-21T00:52:27.2110582Z         	Messages:   	Project creation failed: test-acc-tf-p-3655010758860424128, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:52:27.2111806Z --- FAIL: TestAccAlertConfigurationAPI_basic (68.49s)
```

- 2026-07-22 PASS 12 seconds
- 2026-07-23

### Error 2026-07-23T00:48:36+00:00
```
2026-07-23T00:48:36.8863230Z === RUN   TestAccAlertConfigurationAPI_basic
2026-07-23T00:48:36.8863908Z     resource_test.go:21: Creating execution project (1): test-acc-tf-p-1186800811563093666
2026-07-23T00:48:36.8864405Z     resource_test.go:21: 
2026-07-23T00:48:36.8865552Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:48:36.8867748Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T00:48:36.8870031Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T00:48:36.8873010Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/alertconfigurationapi/resource_test.go:21
2026-07-23T00:48:36.8874087Z         	Error:      	Received unexpected error:
2026-07-23T00:48:36.8875656Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:48:36.8876567Z         	Test:       	TestAccAlertConfigurationAPI_basic
2026-07-23T00:48:36.8877978Z         	Messages:   	Project creation failed: test-acc-tf-p-1186800811563093666, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:48:36.8878935Z --- FAIL: TestAccAlertConfigurationAPI_basic (61.45s)
```

- 2026-07-24 PASS 12 seconds
- 2026-07-25 PASS 14 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 17 seconds
- 2026-07-28 PASS 12 seconds
- 2026-07-29 PASS 13 seconds
- 2026-07-30 PASS 15 seconds
- 2026-07-31 PASS 11 seconds
- 2026-08-01 PASS 13 seconds
- 2026-08-02: MISSING
- 2026-08-03 PASS 14 seconds
- 2026-08-04 PASS 12 seconds
- 2026-08-05 PASS 13 seconds
- 2026-08-06 PASS 12 seconds
- 2026-08-07 PASS 12 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 13 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 14 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 12 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 12 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 13 seconds
  - PASS 9 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 18 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING

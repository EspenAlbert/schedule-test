# autogen_fast/alertconfigurationapi/TestAccAlertConfigurationAPI_basic Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 21) FAIL(x 9)
Success rate: 70.00%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 01:07](#error-2026-05-09t0107490000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 86.09s
[2026-05-16 00:58](#error-2026-05-16t0058270000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.07s
[2026-05-19 01:08](#error-2026-05-19t0108180000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.08s
[2026-05-21 01:09](#error-2026-05-21t0109190000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 78.01s
[2026-05-23 01:05](#error-2026-05-23t0105260000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 66.05s
[2026-05-26 02:14](#error-2026-05-26t0214390000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 66.02s
[2026-05-28 01:01](#error-2026-05-28t0101180000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 72.06s
[2026-05-30 01:10](#error-2026-05-30t0110400000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 113.08s
[2026-06-02 01:15](#error-2026-06-02t0115500000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.04s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS 12 seconds
- 2026-05-08 PASS 12 seconds
- 2026-05-09

### Error 2026-05-09T01:07:49+00:00
```
2026-05-09T01:07:49.2562626Z === RUN   TestAccAlertConfigurationAPI_basic
2026-05-09T01:07:49.2564349Z     resource_test.go:21: Creating execution project (1): test-acc-tf-p-1709106005780895125
2026-05-09T01:07:49.2565728Z     resource_test.go:21: 
2026-05-09T01:07:49.2568142Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-09T01:07:49.2573704Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-09T01:07:49.2578318Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-09T01:07:49.2582229Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/alertconfigurationapi/resource_test.go:21
2026-05-09T01:07:49.2583327Z         	Error:      	Received unexpected error:
2026-05-09T01:07:49.2585576Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:07:49.2586700Z         	Test:       	TestAccAlertConfigurationAPI_basic
2026-05-09T01:07:49.2588897Z         	Messages:   	Project creation failed: test-acc-tf-p-1709106005780895125, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:07:49.2590191Z --- FAIL: TestAccAlertConfigurationAPI_basic (86.88s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 13 seconds
- 2026-05-12 PASS 16 seconds
- 2026-05-13 PASS 11 seconds
- 2026-05-14 PASS 12 seconds
- 2026-05-15 PASS 12 seconds
- 2026-05-16

### Error 2026-05-16T00:58:27+00:00
```
2026-05-16T00:58:27.4747541Z === RUN   TestAccAlertConfigurationAPI_basic
2026-05-16T00:58:27.4748832Z     resource_test.go:21: Creating execution project (1): test-acc-tf-p-824554390486847155
2026-05-16T00:58:27.4749729Z     resource_test.go:21: 
2026-05-16T00:58:27.4751529Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-16T00:58:27.4755061Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-16T00:58:27.4758546Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-16T00:58:27.4762617Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/alertconfigurationapi/resource_test.go:21
2026-05-16T00:58:27.4764374Z         	Error:      	Received unexpected error:
2026-05-16T00:58:27.4768149Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T00:58:27.4770171Z         	Test:       	TestAccAlertConfigurationAPI_basic
2026-05-16T00:58:27.4773412Z         	Messages:   	Project creation failed: test-acc-tf-p-824554390486847155, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T00:58:27.4775545Z --- FAIL: TestAccAlertConfigurationAPI_basic (63.68s)
```

- 2026-05-17: MISSING
- 2026-05-18 PASS 12 seconds
- 2026-05-19

### Error 2026-05-19T01:08:18+00:00
```
2026-05-19T01:08:18.4292169Z === RUN   TestAccAlertConfigurationAPI_basic
2026-05-19T01:08:18.4293370Z     resource_test.go:21: Creating execution project (1): test-acc-tf-p-2363212175070099582
2026-05-19T01:08:18.4294386Z     resource_test.go:21: 
2026-05-19T01:08:18.4295503Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-19T01:08:18.4297682Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-19T01:08:18.4299833Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-19T01:08:18.4302193Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/alertconfigurationapi/resource_test.go:21
2026-05-19T01:08:18.4303210Z         	Error:      	Received unexpected error:
2026-05-19T01:08:18.4305808Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:08:18.4306945Z         	Test:       	TestAccAlertConfigurationAPI_basic
2026-05-19T01:08:18.4308784Z         	Messages:   	Project creation failed: test-acc-tf-p-2363212175070099582, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:08:18.4310061Z --- FAIL: TestAccAlertConfigurationAPI_basic (64.78s)
```

- 2026-05-20 PASS 15 seconds
- 2026-05-21

### Error 2026-05-21T01:09:19+00:00
```
2026-05-21T01:09:19.7756592Z === RUN   TestAccAlertConfigurationAPI_basic
2026-05-21T01:09:19.7758067Z     resource_test.go:21: Creating execution project (1): test-acc-tf-p-2629582864140896495
2026-05-21T01:09:19.7769442Z     resource_test.go:21: 
2026-05-21T01:09:19.7771264Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-21T01:09:19.7774796Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-21T01:09:19.7778512Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-21T01:09:19.7782339Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/alertconfigurationapi/resource_test.go:21
2026-05-21T01:09:19.7783955Z         	Error:      	Received unexpected error:
2026-05-21T01:09:19.7787976Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:09:19.7790007Z         	Test:       	TestAccAlertConfigurationAPI_basic
2026-05-21T01:09:19.7793340Z         	Messages:   	Project creation failed: test-acc-tf-p-2629582864140896495, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:09:19.7795547Z --- FAIL: TestAccAlertConfigurationAPI_basic (78.07s)
```

- 2026-05-22 PASS 12 seconds
- 2026-05-23

### Error 2026-05-23T01:05:26+00:00
```
2026-05-23T01:05:26.4946441Z === RUN   TestAccAlertConfigurationAPI_basic
2026-05-23T01:05:26.4947699Z     resource_test.go:21: Creating execution project (1): test-acc-tf-p-4706971807161803838
2026-05-23T01:05:26.4948938Z     resource_test.go:21: 
2026-05-23T01:05:26.4950707Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-23T01:05:26.4955154Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-23T01:05:26.4959358Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-23T01:05:26.4963088Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/alertconfigurationapi/resource_test.go:21
2026-05-23T01:05:26.4964047Z         	Error:      	Received unexpected error:
2026-05-23T01:05:26.4966108Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:05:26.4967583Z         	Test:       	TestAccAlertConfigurationAPI_basic
2026-05-23T01:05:26.4969868Z         	Messages:   	Project creation failed: test-acc-tf-p-4706971807161803838, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:05:26.4971430Z --- FAIL: TestAccAlertConfigurationAPI_basic (66.45s)
```

- 2026-05-24: MISSING
- 2026-05-25 PASS 13 seconds
- 2026-05-26

### Error 2026-05-26T02:14:39+00:00
```
2026-05-26T02:14:39.4038681Z === RUN   TestAccAlertConfigurationAPI_basic
2026-05-26T02:14:39.4039744Z     resource_test.go:21: Creating execution project (1): test-acc-tf-p-6847696579419044143
2026-05-26T02:14:39.4042187Z     resource_test.go:21: 
2026-05-26T02:14:39.4043815Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-26T02:14:39.4047125Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-26T02:14:39.4050398Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-26T02:14:39.4054187Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/alertconfigurationapi/resource_test.go:21
2026-05-26T02:14:39.4055511Z         	Error:      	Received unexpected error:
2026-05-26T02:14:39.4059251Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-26T02:14:39.4060965Z         	Test:       	TestAccAlertConfigurationAPI_basic
2026-05-26T02:14:39.4064298Z         	Messages:   	Project creation failed: test-acc-tf-p-6847696579419044143, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-26T02:14:39.4066546Z --- FAIL: TestAccAlertConfigurationAPI_basic (66.21s)
```

- 2026-05-27 PASS 12 seconds
- 2026-05-28

### Error 2026-05-28T01:01:18+00:00
```
2026-05-28T01:01:18.6708569Z === RUN   TestAccAlertConfigurationAPI_basic
2026-05-28T01:01:18.6709696Z     resource_test.go:21: Creating execution project (1): test-acc-tf-p-8783478841707631798
2026-05-28T01:01:18.6710610Z     resource_test.go:21: 
2026-05-28T01:01:18.6712042Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T01:01:18.6714537Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T01:01:18.6717283Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T01:01:18.6720596Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/alertconfigurationapi/resource_test.go:21
2026-05-28T01:01:18.6721993Z         	Error:      	Received unexpected error:
2026-05-28T01:01:18.6725132Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T01:01:18.6726192Z         	Test:       	TestAccAlertConfigurationAPI_basic
2026-05-28T01:01:18.6727815Z         	Messages:   	Project creation failed: test-acc-tf-p-8783478841707631798, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T01:01:18.6728960Z --- FAIL: TestAccAlertConfigurationAPI_basic (72.60s)
```

- 2026-05-29 PASS 13 seconds
- 2026-05-30

### Error 2026-05-30T01:10:40+00:00
```
2026-05-30T01:10:40.4000923Z === RUN   TestAccAlertConfigurationAPI_basic
2026-05-30T01:10:40.4002271Z     resource_test.go:21: Creating execution project (1): test-acc-tf-p-6392980480458356790
2026-05-30T01:10:40.4003385Z     resource_test.go:21: 
2026-05-30T01:10:40.4004886Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-30T01:10:40.4007607Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-30T01:10:40.4010719Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-30T01:10:40.4013688Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/alertconfigurationapi/resource_test.go:21
2026-05-30T01:10:40.4014694Z         	Error:      	Received unexpected error:
2026-05-30T01:10:40.4016746Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:10:40.4017871Z         	Test:       	TestAccAlertConfigurationAPI_basic
2026-05-30T01:10:40.4019695Z         	Messages:   	Project creation failed: test-acc-tf-p-6392980480458356790, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:10:40.4020910Z --- FAIL: TestAccAlertConfigurationAPI_basic (113.83s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS 13 seconds
- 2026-06-02

### Error 2026-06-02T01:15:50+00:00
```
2026-06-02T01:15:50.0263068Z === RUN   TestAccAlertConfigurationAPI_basic
2026-06-02T01:15:50.0265065Z     resource_test.go:21: Creating execution project (1): test-acc-tf-p-3333814288685427575
2026-06-02T01:15:50.0266345Z     resource_test.go:21: 
2026-06-02T01:15:50.0268026Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-06-02T01:15:50.0270175Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-06-02T01:15:50.0272339Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-06-02T01:15:50.0274896Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/alertconfigurationapi/resource_test.go:21
2026-06-02T01:15:50.0276140Z         	Error:      	Received unexpected error:
2026-06-02T01:15:50.0278454Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:15:50.0279823Z         	Test:       	TestAccAlertConfigurationAPI_basic
2026-06-02T01:15:50.0281902Z         	Messages:   	Project creation failed: test-acc-tf-p-3333814288685427575, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:15:50.0283469Z --- FAIL: TestAccAlertConfigurationAPI_basic (62.36s)
```

- 2026-06-03 PASS 13 seconds
- 2026-06-04 PASS 12 seconds
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
- 2026-05-17 PASS 14 seconds
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 12 seconds
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 13 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING

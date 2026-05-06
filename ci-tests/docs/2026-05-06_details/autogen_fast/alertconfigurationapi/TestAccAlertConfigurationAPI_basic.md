# autogen_fast/alertconfigurationapi/TestAccAlertConfigurationAPI_basic Test Details
# Found 35 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 31) FAIL(x 4)
Success rate: 88.57%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-09 00:42](#error-2026-04-09t0042440000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 96.07s
[2026-04-11 00:45](#error-2026-04-11t0045400000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 83.05s
[2026-04-16 00:53](#error-2026-04-16t0053110000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.09s
[2026-04-21 00:50](#error-2026-04-21t0050500000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.08s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 13 seconds
- 2026-04-08 PASS 12 seconds
- 2026-04-09

### Error 2026-04-09T00:42:44+00:00
```
2026-04-09T00:42:44.6627248Z === RUN   TestAccAlertConfigurationAPI_basic
2026-04-09T00:42:44.6628527Z     resource_test.go:21: Creating execution project (1): test-acc-tf-p-6809823250080480549
2026-04-09T00:42:44.6629567Z     resource_test.go:21: 
2026-04-09T00:42:44.6631254Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-09T00:42:44.6634856Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-09T00:42:44.6637942Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-09T00:42:44.6641910Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/alertconfigurationapi/resource_test.go:21
2026-04-09T00:42:44.6643717Z         	Error:      	Received unexpected error:
2026-04-09T00:42:44.6647332Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-09T00:42:44.6649278Z         	Test:       	TestAccAlertConfigurationAPI_basic
2026-04-09T00:42:44.6652825Z         	Messages:   	Project creation failed: test-acc-tf-p-6809823250080480549, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-09T00:42:44.6655090Z --- FAIL: TestAccAlertConfigurationAPI_basic (96.71s)
```

- 2026-04-10 PASS 11 seconds
- 2026-04-11

### Error 2026-04-11T00:45:40+00:00
```
2026-04-11T00:45:40.6960725Z === RUN   TestAccAlertConfigurationAPI_basic
2026-04-11T00:45:40.6961536Z     resource_test.go:21: Creating execution project (1): test-acc-tf-p-5497401183334224468
2026-04-11T00:45:40.6962232Z     resource_test.go:21: 
2026-04-11T00:45:40.6963548Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-11T00:45:40.6966349Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-11T00:45:40.6969265Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-11T00:45:40.6972741Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/alertconfigurationapi/resource_test.go:21
2026-04-11T00:45:40.6974273Z         	Error:      	Received unexpected error:
2026-04-11T00:45:40.6977423Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T00:45:40.6979169Z         	Test:       	TestAccAlertConfigurationAPI_basic
2026-04-11T00:45:40.6982740Z         	Messages:   	Project creation failed: test-acc-tf-p-5497401183334224468, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T00:45:40.6984679Z --- FAIL: TestAccAlertConfigurationAPI_basic (83.45s)
```

- 2026-04-12: MISSING
- 2026-04-13 PASS 11 seconds
- 2026-04-14 PASS 56 seconds
- 2026-04-15 PASS 12 seconds
- 2026-04-16

### Error 2026-04-16T00:53:11+00:00
```
2026-04-16T00:53:11.5685714Z === RUN   TestAccAlertConfigurationAPI_basic
2026-04-16T00:53:11.5686814Z     resource_test.go:21: Creating execution project (1): test-acc-tf-p-6850239044794545092
2026-04-16T00:53:11.5689362Z     resource_test.go:21: 
2026-04-16T00:53:11.5691093Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-16T00:53:11.5694122Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-16T00:53:11.5696970Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-16T00:53:11.5700143Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/alertconfigurationapi/resource_test.go:21
2026-04-16T00:53:11.5701742Z         	Error:      	Received unexpected error:
2026-04-16T00:53:11.5704891Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-16T00:53:11.5706764Z         	Test:       	TestAccAlertConfigurationAPI_basic
2026-04-16T00:53:11.5709658Z         	Messages:   	Project creation failed: test-acc-tf-p-6850239044794545092, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-16T00:53:11.5712246Z --- FAIL: TestAccAlertConfigurationAPI_basic (63.92s)
```

- 2026-04-17 PASS 12 seconds
- 2026-04-18 PASS 32 seconds
- 2026-04-19: MISSING
- 2026-04-20 PASS 14 seconds
- 2026-04-21

### Error 2026-04-21T00:50:50+00:00
```
2026-04-21T00:50:50.3064222Z === RUN   TestAccAlertConfigurationAPI_basic
2026-04-21T00:50:50.3065347Z     resource_test.go:21: Creating execution project (1): test-acc-tf-p-3550540937075623206
2026-04-21T00:50:50.3066176Z     resource_test.go:21: 
2026-04-21T00:50:50.3068093Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-21T00:50:50.3070767Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-21T00:50:50.3072890Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-21T00:50:50.3074924Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/alertconfigurationapi/resource_test.go:21
2026-04-21T00:50:50.3075844Z         	Error:      	Received unexpected error:
2026-04-21T00:50:50.3078078Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-21T00:50:50.3079216Z         	Test:       	TestAccAlertConfigurationAPI_basic
2026-04-21T00:50:50.3081025Z         	Messages:   	Project creation failed: test-acc-tf-p-3550540937075623206, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-21T00:50:50.3082482Z --- FAIL: TestAccAlertConfigurationAPI_basic (62.82s)
```

- 2026-04-22 PASS 12 seconds
- 2026-04-23 PASS a minute
- 2026-04-24 PASS 11 seconds
- 2026-04-25 PASS 33 seconds
- 2026-04-26: MISSING
- 2026-04-27 PASS 10 seconds
- 2026-04-28 PASS 13 seconds
- 2026-04-29 PASS 12 seconds
- 2026-04-30 PASS 27 seconds
- 2026-05-01 PASS 12 seconds
- 2026-05-02 PASS 28 seconds
- 2026-05-03: MISSING
- 2026-05-04 PASS 15 seconds
- 2026-05-05 PASS 58 seconds
- 2026-05-06 PASS 11 seconds

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08
  - PASS 11 seconds
  - PASS 11 seconds
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 11 seconds
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 12 seconds
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 12 seconds
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 12 seconds
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 14 seconds
- 2026-05-04 PASS 11 seconds
- 2026-05-05: MISSING
- 2026-05-06 PASS 12 seconds

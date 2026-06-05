# autogen_fast/alertconfigurationapi/TestAccAlertConfigurationAPI_withMetricUpdated Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 26) FAIL(x 4)
Success rate: 86.67%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 01:07](#error-2026-05-09t0107490000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.06s
[2026-05-28 01:01](#error-2026-05-28t0101180000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 1.04s
[2026-05-30 01:10](#error-2026-05-30t0110400000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 97.05s
[2026-06-02 01:15](#error-2026-06-02t0115500000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 86.02s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS 9 seconds
- 2026-05-08 PASS 8 seconds
- 2026-05-09

### Error 2026-05-09T01:07:49+00:00
```
2026-05-09T01:07:49.2641426Z === RUN   TestAccAlertConfigurationAPI_withMetricUpdated
2026-05-09T01:07:49.2642235Z     resource_test.go:158: Creating execution project (1): test-acc-tf-p-8793990203046256106
2026-05-09T01:07:49.2642803Z     resource_test.go:158: 
2026-05-09T01:07:49.2643774Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-09T01:07:49.2645800Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-09T01:07:49.2647965Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-09T01:07:49.2650077Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/alertconfigurationapi/resource_test.go:158
2026-05-09T01:07:49.2650963Z         	Error:      	Received unexpected error:
2026-05-09T01:07:49.2653024Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:07:49.2654200Z         	Test:       	TestAccAlertConfigurationAPI_withMetricUpdated
2026-05-09T01:07:49.2656101Z         	Messages:   	Project creation failed: test-acc-tf-p-8793990203046256106, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:07:49.2657561Z --- FAIL: TestAccAlertConfigurationAPI_withMetricUpdated (62.65s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 9 seconds
- 2026-05-12 PASS 8 seconds
- 2026-05-13 PASS 8 seconds
- 2026-05-14 PASS 9 seconds
- 2026-05-15 PASS 9 seconds
- 2026-05-16 PASS 10 seconds
- 2026-05-17: MISSING
- 2026-05-18 PASS 9 seconds
- 2026-05-19 PASS a minute
- 2026-05-20 PASS 9 seconds
- 2026-05-21 PASS 28 seconds
- 2026-05-22 PASS 8 seconds
- 2026-05-23 PASS 6 seconds
- 2026-05-24: MISSING
- 2026-05-25 PASS 9 seconds
- 2026-05-26 PASS 6 seconds
- 2026-05-27 PASS 8 seconds
- 2026-05-28

### Error 2026-05-28T01:01:18+00:00
```
2026-05-28T01:01:18.6772880Z === RUN   TestAccAlertConfigurationAPI_withMetricUpdated
2026-05-28T01:01:18.6774109Z     resource_test.go:158: Creating execution project (1): test-acc-tf-p-3031189073078786224
2026-05-28T01:01:18.6774912Z     resource_test.go:158: 
2026-05-28T01:01:18.6775792Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T01:01:18.6777438Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T01:01:18.6779061Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T01:01:18.6781406Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/alertconfigurationapi/resource_test.go:158
2026-05-28T01:01:18.6782249Z         	Error:      	Received unexpected error:
2026-05-28T01:01:18.6784754Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:01:18.6786122Z         	Test:       	TestAccAlertConfigurationAPI_withMetricUpdated
2026-05-28T01:01:18.6788267Z         	Messages:   	Project creation failed: test-acc-tf-p-3031189073078786224, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:01:18.6789740Z --- FAIL: TestAccAlertConfigurationAPI_withMetricUpdated (1.36s)
```

- 2026-05-29 PASS 9 seconds
- 2026-05-30

### Error 2026-05-30T01:10:40+00:00
```
2026-05-30T01:10:40.4088402Z === RUN   TestAccAlertConfigurationAPI_withMetricUpdated
2026-05-30T01:10:40.4089158Z     resource_test.go:158: Creating execution project (1): test-acc-tf-p-6291929607518758233
2026-05-30T01:10:40.4089763Z     resource_test.go:158: 
2026-05-30T01:10:40.4090779Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-30T01:10:40.4092762Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-30T01:10:40.4094853Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-30T01:10:40.4096894Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/alertconfigurationapi/resource_test.go:158
2026-05-30T01:10:40.4098023Z         	Error:      	Received unexpected error:
2026-05-30T01:10:40.4103478Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:10:40.4104684Z         	Test:       	TestAccAlertConfigurationAPI_withMetricUpdated
2026-05-30T01:10:40.4106545Z         	Messages:   	Project creation failed: test-acc-tf-p-6291929607518758233, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:10:40.4107804Z --- FAIL: TestAccAlertConfigurationAPI_withMetricUpdated (97.54s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS 9 seconds
- 2026-06-02

### Error 2026-06-02T01:15:50+00:00
```
2026-06-02T01:15:50.0343383Z === RUN   TestAccAlertConfigurationAPI_withMetricUpdated
2026-06-02T01:15:50.0344405Z     resource_test.go:158: Creating execution project (1): test-acc-tf-p-5569757460471681349
2026-06-02T01:15:50.0345246Z     resource_test.go:158: 
2026-06-02T01:15:50.0346466Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-06-02T01:15:50.0348739Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-06-02T01:15:50.0350975Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-06-02T01:15:50.0353238Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/alertconfigurationapi/resource_test.go:158
2026-06-02T01:15:50.0354553Z         	Error:      	Received unexpected error:
2026-06-02T01:15:50.0356846Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:15:50.0358278Z         	Test:       	TestAccAlertConfigurationAPI_withMetricUpdated
2026-06-02T01:15:50.0360184Z         	Messages:   	Project creation failed: test-acc-tf-p-5569757460471681349, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:15:50.0361484Z --- FAIL: TestAccAlertConfigurationAPI_withMetricUpdated (86.22s)
```

- 2026-06-03 PASS 8 seconds
- 2026-06-04 PASS 8 seconds
- 2026-06-05 PASS 8 seconds

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 8 seconds
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 9 seconds
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 9 seconds
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 9 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING

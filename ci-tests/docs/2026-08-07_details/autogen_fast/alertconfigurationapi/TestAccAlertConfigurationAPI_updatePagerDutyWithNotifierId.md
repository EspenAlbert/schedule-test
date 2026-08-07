# autogen_fast/alertconfigurationapi/TestAccAlertConfigurationAPI_updatePagerDutyWithNotifierId Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 29) FAIL(x 3)
Success rate: 90.62%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-11 00:54](#error-2026-07-11t0054310000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 80.08s
[2026-07-21 00:52](#error-2026-07-21t0052270000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.08s
[2026-07-23 00:48](#error-2026-07-23t0048360000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.06s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09 PASS 15 seconds
- 2026-07-10 PASS 9 seconds
- 2026-07-11

### Error 2026-07-11T00:54:31+00:00
```
2026-07-11T00:54:31.1323132Z === RUN   TestAccAlertConfigurationAPI_updatePagerDutyWithNotifierId
2026-07-11T00:54:31.1323859Z     resource_test.go:190: Creating execution project (1): test-acc-tf-p-9172821839896982280
2026-07-11T00:54:31.1324418Z     resource_test.go:190: 
2026-07-11T00:54:31.1325396Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T00:54:31.1327880Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T00:54:31.1329810Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T00:54:31.1331882Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/alertconfigurationapi/resource_test.go:190
2026-07-11T00:54:31.1332801Z         	Error:      	Received unexpected error:
2026-07-11T00:54:31.1334839Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:54:31.1336268Z         	Test:       	TestAccAlertConfigurationAPI_updatePagerDutyWithNotifierId
2026-07-11T00:54:31.1338210Z         	Messages:   	Project creation failed: test-acc-tf-p-9172821839896982280, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:54:31.1339600Z --- FAIL: TestAccAlertConfigurationAPI_updatePagerDutyWithNotifierId (80.78s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 9 seconds
- 2026-07-14 PASS 7 seconds
- 2026-07-15 PASS 8 seconds
- 2026-07-16 PASS 8 seconds
- 2026-07-17 PASS 9 seconds
- 2026-07-18 PASS 7 seconds
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:52:27+00:00
```
2026-07-21T00:52:27.2179134Z === RUN   TestAccAlertConfigurationAPI_updatePagerDutyWithNotifierId
2026-07-21T00:52:27.2179863Z     resource_test.go:190: Creating execution project (1): test-acc-tf-p-8669125953661832160
2026-07-21T00:52:27.2180425Z     resource_test.go:190: 
2026-07-21T00:52:27.2181390Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:52:27.2183252Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:52:27.2185288Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:52:27.2187323Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/alertconfigurationapi/resource_test.go:190
2026-07-21T00:52:27.2188237Z         	Error:      	Received unexpected error:
2026-07-21T00:52:27.2191076Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:52:27.2192635Z         	Test:       	TestAccAlertConfigurationAPI_updatePagerDutyWithNotifierId
2026-07-21T00:52:27.2195310Z         	Messages:   	Project creation failed: test-acc-tf-p-8669125953661832160, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:52:27.2197185Z --- FAIL: TestAccAlertConfigurationAPI_updatePagerDutyWithNotifierId (0.80s)
```

- 2026-07-22 PASS 9 seconds
- 2026-07-23

### Error 2026-07-23T00:48:36+00:00
```
2026-07-23T00:48:36.8950754Z === RUN   TestAccAlertConfigurationAPI_updatePagerDutyWithNotifierId
2026-07-23T00:48:36.8951324Z     resource_test.go:190: Creating execution project (1): test-acc-tf-p-7809707202621015534
2026-07-23T00:48:36.8951765Z     resource_test.go:190: 
2026-07-23T00:48:36.8952523Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:48:36.8954191Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T00:48:36.8955627Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T00:48:36.8957197Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/alertconfigurationapi/resource_test.go:190
2026-07-23T00:48:36.8957894Z         	Error:      	Received unexpected error:
2026-07-23T00:48:36.8960135Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:48:36.8961506Z         	Test:       	TestAccAlertConfigurationAPI_updatePagerDutyWithNotifierId
2026-07-23T00:48:36.8963606Z         	Messages:   	Project creation failed: test-acc-tf-p-7809707202621015534, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:48:36.8964974Z --- FAIL: TestAccAlertConfigurationAPI_updatePagerDutyWithNotifierId (0.58s)
```

- 2026-07-24 PASS 9 seconds
- 2026-07-25 PASS 9 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 12 seconds
- 2026-07-28 PASS 8 seconds
- 2026-07-29 PASS 9 seconds
- 2026-07-30 PASS 9 seconds
- 2026-07-31 PASS 8 seconds
- 2026-08-01 PASS 8 seconds
- 2026-08-02: MISSING
- 2026-08-03 PASS 9 seconds
- 2026-08-04 PASS 7 seconds
- 2026-08-05 PASS 9 seconds
- 2026-08-06 PASS 9 seconds
- 2026-08-07 PASS 9 seconds

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
- 2026-07-19 PASS 9 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 10 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 9 seconds
  - PASS 7 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 12 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING

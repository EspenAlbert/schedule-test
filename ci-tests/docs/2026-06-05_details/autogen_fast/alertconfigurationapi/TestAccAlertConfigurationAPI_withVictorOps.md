# autogen_fast/alertconfigurationapi/TestAccAlertConfigurationAPI_withVictorOps Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 29) FAIL
Success rate: 96.67%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-05-28 01:01](#error-2026-05-28t0101180000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 1.07s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS 5 seconds
- 2026-05-08 PASS 5 seconds
- 2026-05-09 PASS 3 seconds
- 2026-05-10: MISSING
- 2026-05-11 PASS 5 seconds
- 2026-05-12 PASS 5 seconds
- 2026-05-13 PASS 6 seconds
- 2026-05-14 PASS 6 seconds
- 2026-05-15 PASS 6 seconds
- 2026-05-16 PASS 6 seconds
- 2026-05-17: MISSING
- 2026-05-18 PASS 6 seconds
- 2026-05-19 PASS 3 seconds
- 2026-05-20 PASS 5 seconds
- 2026-05-21 PASS 5 seconds
- 2026-05-22 PASS 6 seconds
- 2026-05-23 PASS 4 seconds
- 2026-05-24: MISSING
- 2026-05-25 PASS 6 seconds
- 2026-05-26 PASS 4 seconds
- 2026-05-27 PASS 5 seconds
- 2026-05-28

### Error 2026-05-28T01:01:18+00:00
```
2026-05-28T01:01:18.6873318Z === RUN   TestAccAlertConfigurationAPI_withVictorOps
2026-05-28T01:01:18.6873911Z     resource_test.go:369: Creating execution project (1): test-acc-tf-p-4044030464602566177
2026-05-28T01:01:18.6874408Z     resource_test.go:369: 
2026-05-28T01:01:18.6875347Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T01:01:18.6876976Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T01:01:18.6878617Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T01:01:18.6880464Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/alertconfigurationapi/resource_test.go:369
2026-05-28T01:01:18.6881440Z         	Error:      	Received unexpected error:
2026-05-28T01:01:18.6883914Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:01:18.6885259Z         	Test:       	TestAccAlertConfigurationAPI_withVictorOps
2026-05-28T01:01:18.6887369Z         	Messages:   	Project creation failed: test-acc-tf-p-4044030464602566177, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:01:18.6888842Z --- FAIL: TestAccAlertConfigurationAPI_withVictorOps (1.71s)
```

- 2026-05-29 PASS 6 seconds
- 2026-05-30 PASS 3 seconds
- 2026-05-31: MISSING
- 2026-06-01 PASS 6 seconds
- 2026-06-02 PASS 3 seconds
- 2026-06-03 PASS 6 seconds
- 2026-06-04 PASS 6 seconds
- 2026-06-05 PASS 6 seconds

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 5 seconds
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 5 seconds
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 6 seconds
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 6 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING

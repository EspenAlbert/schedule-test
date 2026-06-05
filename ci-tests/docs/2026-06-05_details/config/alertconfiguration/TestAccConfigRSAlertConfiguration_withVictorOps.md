# config/alertconfiguration/TestAccConfigRSAlertConfiguration_withVictorOps Test Details
# Found 31 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-05-28 01:01](#error-2026-05-28t0101560000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.07s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS 7 seconds
  - PASS 9 seconds
- 2026-05-08 PASS 19 seconds
- 2026-05-09 PASS 9 seconds
- 2026-05-10: MISSING
- 2026-05-11 PASS 12 seconds
- 2026-05-12 PASS 9 seconds
- 2026-05-13 PASS 13 seconds
- 2026-05-14 PASS 9 seconds
- 2026-05-15 PASS 12 seconds
- 2026-05-16 PASS 7 seconds
- 2026-05-17: MISSING
- 2026-05-18 PASS 10 seconds
- 2026-05-19 PASS 7 seconds
- 2026-05-20 PASS 14 seconds
- 2026-05-21 PASS 8 seconds
- 2026-05-22 PASS 13 seconds
- 2026-05-23 PASS 9 seconds
- 2026-05-24: MISSING
- 2026-05-25 PASS 10 seconds
- 2026-05-26 PASS 8 seconds
- 2026-05-27 PASS 17 seconds
- 2026-05-28

### Error 2026-05-28T01:01:56+00:00
```
2026-05-28T01:01:56.7255356Z === RUN   TestAccConfigRSAlertConfiguration_withVictorOps
2026-05-28T01:01:56.7255962Z     resource_test.go:620: Creating execution project (1): test-acc-tf-p-8225493922296573026
2026-05-28T01:01:56.7256441Z     resource_test.go:620: 
2026-05-28T01:01:56.7257777Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T01:01:56.7259594Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T01:01:56.7261521Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T01:01:56.7263443Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/alertconfiguration/resource_test.go:620
2026-05-28T01:01:56.7264249Z         	Error:      	Received unexpected error:
2026-05-28T01:01:56.7267056Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:01:56.7268502Z         	Test:       	TestAccConfigRSAlertConfiguration_withVictorOps
2026-05-28T01:01:56.7270984Z         	Messages:   	Project creation failed: test-acc-tf-p-8225493922296573026, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:01:56.7272570Z --- FAIL: TestAccConfigRSAlertConfiguration_withVictorOps (0.74s)
```

- 2026-05-29 PASS 21 seconds
- 2026-05-30 PASS 8 seconds
- 2026-05-31: MISSING
- 2026-06-01 PASS 19 seconds
- 2026-06-02 PASS 6 seconds
- 2026-06-03 PASS 20 seconds
- 2026-06-04 PASS 10 seconds
- 2026-06-05 PASS 8 seconds

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 20 seconds
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 20 seconds
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 20 seconds
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 17 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING

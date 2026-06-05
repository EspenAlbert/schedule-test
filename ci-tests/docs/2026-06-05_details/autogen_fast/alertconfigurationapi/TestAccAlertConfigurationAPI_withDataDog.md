# autogen_fast/alertconfigurationapi/TestAccAlertConfigurationAPI_withDataDog Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 28) FAIL(x 2)
Success rate: 93.33%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 01:07](#error-2026-05-09t0107490000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 79.00s
[2026-05-28 01:01](#error-2026-05-28t0101180000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 1.08s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS 4 seconds
- 2026-05-08 PASS 4 seconds
- 2026-05-09

### Error 2026-05-09T01:07:49+00:00
```
2026-05-09T01:07:49.2674632Z === RUN   TestAccAlertConfigurationAPI_withDataDog
2026-05-09T01:07:49.2675264Z     resource_test.go:223: Creating execution project (1): test-acc-tf-p-8003690934040154078
2026-05-09T01:07:49.2675788Z     resource_test.go:223: 
2026-05-09T01:07:49.2676752Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-09T01:07:49.2678880Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-09T01:07:49.2680939Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-09T01:07:49.2683138Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/alertconfigurationapi/resource_test.go:230
2026-05-09T01:07:49.2685311Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/alertconfigurationapi/resource_test.go:223
2026-05-09T01:07:49.2686631Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-09T01:07:49.2687187Z         	Error:      	Received unexpected error:
2026-05-09T01:07:49.2689514Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:07:49.2690665Z         	Test:       	TestAccAlertConfigurationAPI_withDataDog
2026-05-09T01:07:49.2692701Z         	Messages:   	Project creation failed: test-acc-tf-p-8003690934040154078, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:07:49.2694381Z --- FAIL: TestAccAlertConfigurationAPI_withDataDog (79.00s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 4 seconds
- 2026-05-12 PASS 5 seconds
- 2026-05-13 PASS 4 seconds
- 2026-05-14 PASS 4 seconds
- 2026-05-15 PASS 4 seconds
- 2026-05-16 PASS 9 seconds
- 2026-05-17: MISSING
- 2026-05-18 PASS 3 seconds
- 2026-05-19 PASS 4 seconds
- 2026-05-20 PASS 4 seconds
- 2026-05-21 PASS 5 seconds
- 2026-05-22 PASS 5 seconds
- 2026-05-23 PASS 6 seconds
- 2026-05-24: MISSING
- 2026-05-25 PASS 3 seconds
- 2026-05-26 PASS 5 seconds
- 2026-05-27 PASS 4 seconds
- 2026-05-28

### Error 2026-05-28T01:01:18+00:00
```
2026-05-28T01:01:18.6806441Z === RUN   TestAccAlertConfigurationAPI_withDataDog
2026-05-28T01:01:18.6807037Z     resource_test.go:223: Creating execution project (1): test-acc-tf-p-5791046212824832832
2026-05-28T01:01:18.6807533Z     resource_test.go:223: 
2026-05-28T01:01:18.6808394Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T01:01:18.6810077Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T01:01:18.6811856Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T01:01:18.6813642Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/alertconfigurationapi/resource_test.go:230
2026-05-28T01:01:18.6815484Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/alertconfigurationapi/resource_test.go:223
2026-05-28T01:01:18.6816649Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-28T01:01:18.6817162Z         	Error:      	Received unexpected error:
2026-05-28T01:01:18.6819605Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:01:18.6821149Z         	Test:       	TestAccAlertConfigurationAPI_withDataDog
2026-05-28T01:01:18.6823261Z         	Messages:   	Project creation failed: test-acc-tf-p-5791046212824832832, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:01:18.6824715Z --- FAIL: TestAccAlertConfigurationAPI_withDataDog (1.77s)
```

- 2026-05-29 PASS 4 seconds
- 2026-05-30 PASS 5 seconds
- 2026-05-31: MISSING
- 2026-06-01 PASS 4 seconds
- 2026-06-02 PASS 5 seconds
- 2026-06-03 PASS 5 seconds
- 2026-06-04 PASS 4 seconds
- 2026-06-05 PASS 4 seconds

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 2 seconds
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
- 2026-05-24 PASS 4 seconds
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 4 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING

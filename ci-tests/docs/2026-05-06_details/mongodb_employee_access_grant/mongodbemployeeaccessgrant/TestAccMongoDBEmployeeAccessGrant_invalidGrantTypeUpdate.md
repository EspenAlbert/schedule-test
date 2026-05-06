# mongodb_employee_access_grant/mongodbemployeeaccessgrant/TestAccMongoDBEmployeeAccessGrant_invalidGrantTypeUpdate Test Details
# Found 34 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 33) FAIL
Success rate: 97.06%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-16 00:50](#error-2026-04-16t0050350000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69e032551ec945fedc717561/clusters | dev | out_of_capacity | 0.05s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 2 seconds
- 2026-04-08 PASS 3 seconds
- 2026-04-09 PASS 16 minutes
- 2026-04-10 PASS 3 seconds
- 2026-04-11 PASS 3 seconds
- 2026-04-12: MISSING
- 2026-04-13 PASS 3 seconds
- 2026-04-14 PASS 2 seconds
- 2026-04-15 PASS 2 seconds
- 2026-04-16

### Error 2026-04-16T00:50:35+00:00
```
2026-04-16T00:50:35.2327615Z === RUN   TestAccMongoDBEmployeeAccessGrant_invalidGrantTypeUpdate
2026-04-16T00:50:35.2328255Z     resource_test.go:115: Creating execution cluster: test-acc-tf-c-8894880993446532760
2026-04-16T00:50:35.7427588Z     resource_test.go:115: 
2026-04-16T00:50:35.7429665Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:46
2026-04-16T00:50:35.7432160Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:194
2026-04-16T00:50:35.7435010Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/mongodbemployeeaccessgrant/resource_test.go:115
2026-04-16T00:50:35.7435889Z         	Error:      	Received unexpected error:
2026-04-16T00:50:35.7438705Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e032551ec945fedc717561/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2026-04-16T00:50:35.7440310Z         	Test:       	TestAccMongoDBEmployeeAccessGrant_invalidGrantTypeUpdate
2026-04-16T00:50:35.7442624Z         	Messages:   	Cluster creation failed: test-acc-tf-c-8894880993446532760, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e032551ec945fedc717561/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2026-04-16T00:50:35.7444359Z --- FAIL: TestAccMongoDBEmployeeAccessGrant_invalidGrantTypeUpdate (0.51s)
```

- 2026-04-17 PASS 3 seconds
- 2026-04-18 PASS 3 seconds
- 2026-04-19: MISSING
- 2026-04-20 PASS 2 seconds
- 2026-04-21 PASS 2 seconds
- 2026-04-22 PASS 2 seconds
- 2026-04-23 PASS 3 seconds
- 2026-04-24 PASS 2 seconds
- 2026-04-25 PASS 3 seconds
- 2026-04-26: MISSING
- 2026-04-27 PASS 3 seconds
- 2026-04-28 PASS 2 seconds
- 2026-04-29 PASS 2 seconds
- 2026-04-30 PASS 3 seconds
- 2026-05-01 PASS 2 seconds
- 2026-05-02 PASS 3 seconds
- 2026-05-03: MISSING
- 2026-05-04 PASS 2 seconds
- 2026-05-05 PASS 2 seconds
- 2026-05-06 PASS 3 seconds

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 2 seconds
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 2 seconds
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 3 seconds
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS a second
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS a second
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 2 seconds
- 2026-05-04 PASS 2 seconds
- 2026-05-05: MISSING
- 2026-05-06 PASS 2 seconds

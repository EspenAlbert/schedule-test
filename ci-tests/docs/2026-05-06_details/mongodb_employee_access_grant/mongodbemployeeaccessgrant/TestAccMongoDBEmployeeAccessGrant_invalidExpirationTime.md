# mongodb_employee_access_grant/mongodbemployeeaccessgrant/TestAccMongoDBEmployeeAccessGrant_invalidExpirationTime Test Details
# Found 34 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 32) FAIL(x 2)
Success rate: 94.12%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-09 00:39](#error-2026-04-09t0039280000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 84.06s
[2026-04-16 00:50](#error-2026-04-16t0050330000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69e032551ec945fedc717561/clusters | dev | out_of_capacity | 0.06s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS a moment
- 2026-04-08 PASS a moment
- 2026-04-09

### Error 2026-04-09T00:39:28+00:00
```
2026-04-09T00:39:28.4807401Z === RUN   TestAccMongoDBEmployeeAccessGrant_invalidExpirationTime
2026-04-09T00:39:28.4808045Z     resource_test.go:66: Creating execution project (1): test-acc-tf-p-5575445784569212068
2026-04-09T00:40:53.0797562Z     resource_test.go:66: 
2026-04-09T00:40:53.0799850Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-09T00:40:53.0803102Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-09T00:40:53.0805267Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-09T00:40:53.0807737Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-04-09T00:40:53.0809961Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/mongodbemployeeaccessgrant/resource_test.go:66
2026-04-09T00:40:53.0811247Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-04-09T00:40:53.0811784Z         	Error:      	Received unexpected error:
2026-04-09T00:40:53.0813789Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-09T00:40:53.0814981Z         	Test:       	TestAccMongoDBEmployeeAccessGrant_invalidExpirationTime
2026-04-09T00:40:53.0816861Z         	Messages:   	Project creation failed: test-acc-tf-p-5575445784569212068, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-09T00:40:53.0818395Z --- FAIL: TestAccMongoDBEmployeeAccessGrant_invalidExpirationTime (84.60s)
```

- 2026-04-10 PASS a moment
- 2026-04-11 PASS a moment
- 2026-04-12: MISSING
- 2026-04-13 PASS a moment
- 2026-04-14 PASS a moment
- 2026-04-15 PASS a moment
- 2026-04-16

### Error 2026-04-16T00:50:33+00:00
```
2026-04-16T00:50:33.0525101Z === RUN   TestAccMongoDBEmployeeAccessGrant_invalidExpirationTime
2026-04-16T00:50:33.0525762Z     resource_test.go:66: Creating execution cluster: test-acc-tf-c-1774635356343811541
2026-04-16T00:50:33.6181076Z     resource_test.go:66: 
2026-04-16T00:50:33.6183252Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:46
2026-04-16T00:50:33.6185710Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:194
2026-04-16T00:50:33.6187770Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/mongodbemployeeaccessgrant/resource_test.go:66
2026-04-16T00:50:33.6188642Z         	Error:      	Received unexpected error:
2026-04-16T00:50:33.6191226Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e032551ec945fedc717561/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2026-04-16T00:50:33.6192829Z         	Test:       	TestAccMongoDBEmployeeAccessGrant_invalidExpirationTime
2026-04-16T00:50:33.6195229Z         	Messages:   	Cluster creation failed: test-acc-tf-c-1774635356343811541, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e032551ec945fedc717561/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2026-04-16T00:50:33.6196714Z --- FAIL: TestAccMongoDBEmployeeAccessGrant_invalidExpirationTime (0.57s)
```

- 2026-04-17 PASS a moment
- 2026-04-18 PASS a moment
- 2026-04-19: MISSING
- 2026-04-20 PASS a moment
- 2026-04-21 PASS a moment
- 2026-04-22 PASS a moment
- 2026-04-23 PASS a moment
- 2026-04-24 PASS a moment
- 2026-04-25 PASS a moment
- 2026-04-26: MISSING
- 2026-04-27 PASS a moment
- 2026-04-28 PASS a moment
- 2026-04-29 PASS a moment
- 2026-04-30 PASS a moment
- 2026-05-01 PASS a moment
- 2026-05-02 PASS a moment
- 2026-05-03: MISSING
- 2026-05-04 PASS a moment
- 2026-05-05 PASS a moment
- 2026-05-06 PASS a moment

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS a moment
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS a moment
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS a moment
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS a moment
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS a moment
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS a moment
- 2026-05-04 PASS a moment
- 2026-05-05: MISSING
- 2026-05-06 PASS a moment

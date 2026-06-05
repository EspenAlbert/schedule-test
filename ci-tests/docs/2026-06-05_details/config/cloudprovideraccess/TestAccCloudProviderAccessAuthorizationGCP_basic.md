# config/cloudprovideraccess/TestAccCloudProviderAccessAuthorizationGCP_basic Test Details
# Found 31 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 29) FAIL(x 2)
Success rate: 93.55%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-16 01:00](#error-2026-05-16t0100420000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 80.03s
[2026-05-30 01:08](#error-2026-05-30t0108140000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 69.08s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS a minute
  - PASS a minute
- 2026-05-08 PASS a minute
- 2026-05-09 PASS 2 minutes
- 2026-05-10: MISSING
- 2026-05-11 PASS a minute
- 2026-05-12 PASS a minute
- 2026-05-13 PASS a minute
- 2026-05-14 PASS a minute
- 2026-05-15 PASS a minute
- 2026-05-16

### Error 2026-05-16T01:00:42+00:00
```
2026-05-16T01:00:42.5586638Z === RUN   TestAccCloudProviderAccessAuthorizationGCP_basic
2026-05-16T01:00:42.5588063Z     resource_cloud_provider_access_authorization_test.go:44: Creating execution project (1): test-acc-tf-p-7141798090467758686
2026-05-16T01:00:42.5589359Z     resource_cloud_provider_access_authorization_test.go:44: 
2026-05-16T01:00:42.5591201Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-16T01:00:42.5594680Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-16T01:00:42.5598412Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-16T01:00:42.5602755Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudprovideraccess/resource_cloud_provider_access_authorization_test.go:44
2026-05-16T01:00:42.5604527Z         	Error:      	Received unexpected error:
2026-05-16T01:00:42.5608544Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T01:00:42.5610718Z         	Test:       	TestAccCloudProviderAccessAuthorizationGCP_basic
2026-05-16T01:00:42.5614144Z         	Messages:   	Project creation failed: test-acc-tf-p-7141798090467758686, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T01:00:42.5616664Z --- FAIL: TestAccCloudProviderAccessAuthorizationGCP_basic (80.26s)
```

- 2026-05-17: MISSING
- 2026-05-18 PASS a minute
- 2026-05-19 PASS a minute
- 2026-05-20 PASS a minute
- 2026-05-21 PASS a minute
- 2026-05-22 PASS a minute
- 2026-05-23 PASS a minute
- 2026-05-24: MISSING
- 2026-05-25 PASS a minute
- 2026-05-26 PASS a minute
- 2026-05-27 PASS a minute
- 2026-05-28 PASS a minute
- 2026-05-29 PASS a minute
- 2026-05-30

### Error 2026-05-30T01:08:14+00:00
```
2026-05-30T01:08:14.0083492Z === RUN   TestAccCloudProviderAccessAuthorizationGCP_basic
2026-05-30T01:08:14.0084303Z     resource_cloud_provider_access_authorization_test.go:44: Creating execution project (1): test-acc-tf-p-1935066747833873037
2026-05-30T01:08:14.0085035Z     resource_cloud_provider_access_authorization_test.go:44: 
2026-05-30T01:08:14.0086051Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-30T01:08:14.0088030Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-30T01:08:14.0089840Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-30T01:08:14.0092085Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudprovideraccess/resource_cloud_provider_access_authorization_test.go:44
2026-05-30T01:08:14.0093197Z         	Error:      	Received unexpected error:
2026-05-30T01:08:14.0095337Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:08:14.0096875Z         	Test:       	TestAccCloudProviderAccessAuthorizationGCP_basic
2026-05-30T01:08:14.0099157Z         	Messages:   	Project creation failed: test-acc-tf-p-1935066747833873037, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:08:14.0100648Z --- FAIL: TestAccCloudProviderAccessAuthorizationGCP_basic (69.76s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS a minute
- 2026-06-02 PASS a minute
- 2026-06-03 PASS a minute
- 2026-06-04 PASS a minute
- 2026-06-05 PASS a minute

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS a minute
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS a minute
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS a minute
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS a minute
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING

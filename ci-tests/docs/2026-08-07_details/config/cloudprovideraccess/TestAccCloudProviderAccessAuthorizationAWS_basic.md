# config/cloudprovideraccess/TestAccCloudProviderAccessAuthorizationAWS_basic Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 31) FAIL
Success rate: 96.88%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:58](#error-2026-07-09t0058000000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 69.02s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:58:00+00:00
```
2026-07-09T00:58:00.7571213Z === RUN   TestAccCloudProviderAccessAuthorizationAWS_basic
2026-07-09T00:58:00.7572021Z     resource_cloud_provider_access_authorization_test.go:17: Creating execution project (1): test-acc-tf-p-258148546840745873
2026-07-09T00:58:00.7572768Z     resource_cloud_provider_access_authorization_test.go:17: 
2026-07-09T00:58:00.7573816Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:58:00.7575901Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T00:58:00.7577978Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T00:58:00.7580338Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudprovideraccess/resource_cloud_provider_access_authorization_test.go:84
2026-07-09T00:58:00.7582897Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudprovideraccess/resource_cloud_provider_access_authorization_test.go:17
2026-07-09T00:58:00.7584398Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-09T00:58:00.7584946Z         	Error:      	Received unexpected error:
2026-07-09T00:58:00.7587297Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:58:00.7588484Z         	Test:       	TestAccCloudProviderAccessAuthorizationAWS_basic
2026-07-09T00:58:00.7590397Z         	Messages:   	Project creation failed: test-acc-tf-p-258148546840745873, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:58:00.7591682Z --- FAIL: TestAccCloudProviderAccessAuthorizationAWS_basic (69.20s)
```

- 2026-07-10 PASS a minute
- 2026-07-11 PASS a minute
- 2026-07-12: MISSING
- 2026-07-13 PASS a minute
- 2026-07-14 PASS a minute
- 2026-07-15 PASS a minute
- 2026-07-16 PASS a minute
- 2026-07-17 PASS a minute
- 2026-07-18 PASS a minute
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21 PASS a minute
- 2026-07-22 PASS a minute
- 2026-07-23 PASS a minute
- 2026-07-24 PASS a minute
- 2026-07-25 PASS a minute
- 2026-07-26: MISSING
- 2026-07-27 PASS a minute
- 2026-07-28 PASS a minute
- 2026-07-29 PASS a minute
- 2026-07-30 PASS 56 seconds
- 2026-07-31 PASS a minute
- 2026-08-01 PASS 57 seconds
- 2026-08-02: MISSING
- 2026-08-03 PASS a minute
- 2026-08-04 PASS 58 seconds
- 2026-08-05 PASS a minute
- 2026-08-06 PASS 56 seconds
- 2026-08-07 PASS a minute

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS a minute
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS a minute
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS a minute
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS a minute
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 59 seconds
  - PASS a minute
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS a minute
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING

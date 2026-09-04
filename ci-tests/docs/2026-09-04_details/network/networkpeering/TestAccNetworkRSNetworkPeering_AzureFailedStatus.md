# network/networkpeering/TestAccNetworkRSNetworkPeering_AzureFailedStatus Test Details
# Found 11 TestRuns in dev, qa from 2026-08-06 to 2026-09-04 from master branch: 1 unique tests, PASS(x 10) FAIL
Success rate: 90.91%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-09-04 00:54](#error-2026-09-04t0054070000) |  | dev | 0.02s

### Timeline
- 2026-08-05: MISSING
- 2026-08-06 PASS 8 minutes
- 2026-08-07 PASS 8 minutes
- 2026-08-08: MISSING
- 2026-08-09: MISSING
- 2026-08-10: MISSING
- 2026-08-11: MISSING
- 2026-08-12: MISSING
- 2026-08-13: MISSING
- 2026-08-14: MISSING
- 2026-08-15: MISSING
- 2026-08-16: MISSING
- 2026-08-17: MISSING
- 2026-08-18: MISSING
- 2026-08-19: MISSING
- 2026-08-20: MISSING
- 2026-08-21: MISSING
- 2026-08-22: MISSING
- 2026-08-23: MISSING
- 2026-08-24: MISSING
- 2026-08-25: MISSING
- 2026-08-26: MISSING
- 2026-08-27: MISSING
- 2026-08-28 PASS 3 minutes
- 2026-08-29 PASS 3 minutes
- 2026-08-30: MISSING
- 2026-08-31 PASS 3 minutes
- 2026-09-01 PASS 3 minutes
- 2026-09-02 PASS 4 minutes
- 2026-09-03 PASS 3 minutes
- 2026-09-04
  - FAIL a moment

### Error 2026-09-04T00:54:07+00:00
```
2026-09-04T00:54:07.6274227Z === RUN   TestAccNetworkRSNetworkPeering_AzureFailedStatus
2026-09-04T00:54:07.6274687Z     resource_test.go:96: 
2026-09-04T00:54:07.6275668Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/azure.go:54
2026-09-04T00:54:07.6277429Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/azure.go:41
2026-09-04T00:54:07.6279325Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/networkpeering/resource_test.go:96
2026-09-04T00:54:07.6281090Z         	            				/home/runner/go/pkg/mod/github.com/hashicorp/terraform-plugin-testing@v1.16.0/helper/resource/testing.go:997
2026-09-04T00:54:07.6282445Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-09-04T00:54:07.6283260Z         	Error:      	Received unexpected error:
2026-09-04T00:54:07.6289623Z         	            	Get "https://management.azure.com/subscriptions/***/resourceGroups/***/providers/Microsoft.Network/virtualNetworks/***/virtualNetworkPeerings?api-version=2024-01-01": oauth2: "invalid_client" "AADSTS7000222: The provided client secret keys for app '***' are expired. Visit the Azure portal to create new keys for your app: https://aka.ms/NewClientSecret, or consider using certificate credentials for added security: https://aka.ms/certCreds. Trace ID: de3792f0-c1b6-4d33-8bce-29fcd2670301 Correlation ID: cc1d4f0a-b9bb-463b-8450-b4e94802e5b3 Timestamp: 2026-09-04 00:40:39Z" "https://login.microsoftonline.com/error?code=7000222"
2026-09-04T00:54:07.6292193Z         	Test:       	TestAccNetworkRSNetworkPeering_AzureFailedStatus
2026-09-04T00:54:07.6292755Z --- FAIL: TestAccNetworkRSNetworkPeering_AzureFailedStatus (0.21s)
```

  - PASS 6 minutes

## QA Environment
### Timeline
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
- 2026-08-08: MISSING
- 2026-08-09: MISSING
- 2026-08-10: MISSING
- 2026-08-11: MISSING
- 2026-08-12: MISSING
- 2026-08-13: MISSING
- 2026-08-14: MISSING
- 2026-08-15: MISSING
- 2026-08-16: MISSING
- 2026-08-17: MISSING
- 2026-08-18: MISSING
- 2026-08-19: MISSING
- 2026-08-20: MISSING
- 2026-08-21: MISSING
- 2026-08-22: MISSING
- 2026-08-23: MISSING
- 2026-08-24: MISSING
- 2026-08-25: MISSING
- 2026-08-26: MISSING
- 2026-08-27: MISSING
- 2026-08-28: MISSING
- 2026-08-29: MISSING
- 2026-08-30 PASS 8 minutes
- 2026-08-31: MISSING
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING

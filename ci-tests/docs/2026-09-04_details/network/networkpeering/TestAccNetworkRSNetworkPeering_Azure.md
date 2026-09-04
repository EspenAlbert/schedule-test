# network/networkpeering/TestAccNetworkRSNetworkPeering_Azure Test Details
# Found 11 TestRuns in dev, qa from 2026-08-06 to 2026-09-04 from master branch: 1 unique tests, PASS(x 10) FAIL
Success rate: 90.91%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-09-04 00:54](#error-2026-09-04t0054070000) |  | dev | 3.03s

### Timeline
- 2026-08-05: MISSING
- 2026-08-06 PASS 4 minutes
- 2026-08-07 PASS 4 minutes
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
- 2026-08-28 PASS 4 minutes
- 2026-08-29 PASS 4 minutes
- 2026-08-30: MISSING
- 2026-08-31 PASS 4 minutes
- 2026-09-01 PASS 4 minutes
- 2026-09-02 PASS 4 minutes
- 2026-09-03 PASS 4 minutes
- 2026-09-04
  - FAIL 3 seconds

### Error 2026-09-04T00:54:07+00:00
```
2026-09-04T00:54:07.6254045Z === RUN   TestAccNetworkRSNetworkPeering_Azure
2026-09-04T00:54:07.6254790Z     resource_test.go:35: Creating execution project (1): test-acc-tf-p-8597375602794902796
2026-09-04T00:54:07.6255358Z     resource_test.go:45: 
2026-09-04T00:54:07.6256687Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/azure.go:54
2026-09-04T00:54:07.6258480Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/azure.go:41
2026-09-04T00:54:07.6260356Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/networkpeering/resource_test.go:45
2026-09-04T00:54:07.6262083Z         	            				/home/runner/go/pkg/mod/github.com/hashicorp/terraform-plugin-testing@v1.16.0/helper/resource/testing.go:997
2026-09-04T00:54:07.6263430Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-09-04T00:54:07.6264025Z         	Error:      	Received unexpected error:
2026-09-04T00:54:07.6270515Z         	            	Get "https://management.azure.com/subscriptions/***/resourceGroups/***/providers/Microsoft.Network/virtualNetworks/***/virtualNetworkPeerings?api-version=2024-01-01": oauth2: "invalid_client" "AADSTS7000222: The provided client secret keys for app '***' are expired. Visit the Azure portal to create new keys for your app: https://aka.ms/NewClientSecret, or consider using certificate credentials for added security: https://aka.ms/certCreds. Trace ID: e879d2dd-a1f7-460c-8816-b030d3c91400 Correlation ID: 83584dc6-de0e-442c-84cf-64d6365c7d38 Timestamp: 2026-09-04 00:40:39Z" "https://login.microsoftonline.com/error?code=7000222"
2026-09-04T00:54:07.6273245Z         	Test:       	TestAccNetworkRSNetworkPeering_Azure
2026-09-04T00:54:07.6273741Z --- FAIL: TestAccNetworkRSNetworkPeering_Azure (3.26s)
```

  - PASS 4 minutes

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
- 2026-08-30 PASS 5 minutes
- 2026-08-31: MISSING
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING

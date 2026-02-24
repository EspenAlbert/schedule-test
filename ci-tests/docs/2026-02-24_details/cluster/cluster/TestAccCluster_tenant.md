# cluster/cluster/TestAccCluster_tenant Test Details
# Found 32 TestRuns in dev, qa from 2026-01-26 to 2026-02-24 from master branch: 1 unique tests, SKIP(x 24) PASS(x 5) FAIL(x 3)
Success rate: 62.50%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-28 00:32](#error-2026-01-28t0032380000) |  | dev |  | 2174.07s
[2026-01-31 00:35](#error-2026-01-31t0035140000) |  | dev | timeout | 11047.07s
[2026-02-02 00:38](#error-2026-02-02t0038370000) |  | dev | timeout | 11048.02s

### Timeline
- 2026-01-25: MISSING
- 2026-01-26 PASS 24 minutes
- 2026-01-27 PASS 27 minutes
- 2026-01-28

### Error 2026-01-28T00:32:38+00:00
```
2026-01-28T00:32:38.1551177Z === RUN   TestAccCluster_tenant
2026-01-28T00:32:38.1567729Z === CONT  TestAccCluster_tenant
2026-01-28T01:07:52.1764447Z === NAME  TestAccCluster_tenant
2026-01-28T01:07:52.1765635Z     resource_cluster_test.go:1027: Step 2/2 error: After applying this test step, the non-refresh plan was not empty.
2026-01-28T01:07:52.1766580Z         stdout:
2026-01-28T01:07:52.1766926Z         
2026-01-28T01:07:52.1768257Z         Terraform used the selected providers to generate the following execution
2026-01-28T01:07:52.1769285Z         plan. Resource actions are indicated with the following symbols:
2026-01-28T01:07:52.1769959Z           ~ update in-place
2026-01-28T01:07:52.1770332Z         
2026-01-28T01:07:52.1771117Z         Terraform will perform the following actions:
2026-01-28T01:07:52.1771670Z         
2026-01-28T01:07:52.1772351Z           # mongodbatlas_cluster.tenant will be updated in-place
2026-01-28T01:07:52.1773176Z           ~ resource "mongodbatlas_cluster" "tenant" {
2026-01-28T01:07:52.1774362Z               ~ backing_provider_name                            = "AWS" -> (known after apply)
2026-01-28T01:07:52.1775491Z               ~ disk_size_gb                                     = 5 -> 10
2026-01-28T01:07:52.1779553Z                 id                                               = "Y2x1c3Rlcl9pZA==:Njk3OTU5MjgxMGYwODVlYzc4ZGRiODk4-Y2x1c3Rlcl9uYW1l:dGVzdC1hY2MtdGYtYy0xODE0MzEwNzkxNzIzODYyNzQ2-cHJvamVjdF9pZA==:Njk3OTU5MjQ1MzE3ZTFmZGRkNjQyZmVj-cHJvdmlkZXJfbmFtZQ==:VEVOQU5U"
2026-01-28T01:07:52.1782019Z                 name                                             = "test-acc-tf-c-1814310791723862746"
2026-01-28T01:07:52.1783257Z               ~ provider_instance_size_name                      = "M5" -> "M10"
2026-01-28T01:07:52.1784523Z               ~ provider_name                                    = "TENANT" -> "AWS"
2026-01-28T01:07:52.1785835Z               ~ provider_region_name                             = "US_EAST_1" -> "EU_CENTRAL_1"
2026-01-28T01:07:52.1786803Z                 # (28 unchanged attributes hidden)
2026-01-28T01:07:52.1787487Z         
2026-01-28T01:07:52.1788078Z                 # (3 unchanged blocks hidden)
2026-01-28T01:07:52.1788577Z             }
2026-01-28T01:07:52.1788917Z         
2026-01-28T01:07:52.1789463Z         Plan: 0 to add, 1 to change, 0 to destroy.
2026-01-28T01:08:52.8794005Z --- FAIL: TestAccCluster_tenant (2174.72s)
```

- 2026-01-29 PASS 46 minutes
- 2026-01-30 PASS 38 minutes
- 2026-01-31

### Error 2026-01-31T00:35:14+00:00
```
2026-01-31T00:35:14.2387373Z === RUN   TestAccCluster_tenant
2026-01-31T00:35:14.2533453Z === CONT  TestAccCluster_tenant
2026-01-31T03:38:21.0324510Z === NAME  TestAccCluster_tenant
2026-01-31T03:38:21.0325045Z     resource_cluster_test.go:1027: Step 2/2 error: Error running apply: exit status 1
2026-01-31T03:38:21.0325596Z         
2026-01-31T03:38:21.0327036Z         Error: error updating MongoDB Cluster (test-acc-tf-c-7280072753105363140): timeout while waiting for state to become 'IDLE' (last state: 'UPDATING', timeout: 3h0m0s)
2026-01-31T03:38:21.0327913Z         
2026-01-31T03:38:21.0328297Z           with mongodbatlas_cluster.tenant,
2026-01-31T03:38:21.0329072Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "tenant":
2026-01-31T03:38:21.0329810Z           12: 	resource "mongodbatlas_cluster" "tenant" {
2026-01-31T03:38:21.0330235Z         
2026-01-31T03:39:21.9554645Z --- FAIL: TestAccCluster_tenant (11047.69s)
```

- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T00:38:37+00:00
```
2026-02-02T00:38:37.8795781Z === RUN   TestAccCluster_tenant
2026-02-02T00:38:37.8807471Z === CONT  TestAccCluster_tenant
2026-02-02T03:41:44.8806649Z === NAME  TestAccCluster_tenant
2026-02-02T03:41:44.8807424Z     resource_cluster_test.go:1027: Step 2/2 error: Error running apply: exit status 1
2026-02-02T03:41:44.8807821Z         
2026-02-02T03:41:44.8808746Z         Error: error updating MongoDB Cluster (test-acc-tf-c-288708881591384844): timeout while waiting for state to become 'IDLE' (last state: 'UPDATING', timeout: 3h0m0s)
2026-02-02T03:41:44.8809447Z         
2026-02-02T03:41:44.8809725Z           with mongodbatlas_cluster.tenant,
2026-02-02T03:41:44.8810368Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "tenant":
2026-02-02T03:41:44.8811118Z           12: 	resource "mongodbatlas_cluster" "tenant" {
2026-02-02T03:41:44.8811417Z         
2026-02-02T03:42:46.1211217Z --- FAIL: TestAccCluster_tenant (11048.24s)
```

- 2026-02-03 SKIP unknown
- 2026-02-04 SKIP unknown
- 2026-02-05 SKIP unknown
- 2026-02-06 SKIP unknown
- 2026-02-07 SKIP unknown
- 2026-02-08: MISSING
- 2026-02-09 SKIP unknown
- 2026-02-10 SKIP unknown
- 2026-02-11 SKIP unknown
- 2026-02-12 SKIP unknown
- 2026-02-13 SKIP unknown
- 2026-02-14 SKIP unknown
- 2026-02-15: MISSING
- 2026-02-16 SKIP unknown
- 2026-02-17 SKIP unknown
- 2026-02-18 SKIP unknown
- 2026-02-19 SKIP unknown
- 2026-02-20 SKIP unknown
- 2026-02-21 SKIP unknown
- 2026-02-22: MISSING
- 2026-02-23 SKIP unknown
- 2026-02-24 SKIP unknown

## QA Environment
### Timeline
- 2026-01-25: MISSING
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 28 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 SKIP unknown
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 SKIP unknown
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 SKIP unknown
- 2026-02-16: MISSING
- 2026-02-17 SKIP unknown
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 SKIP unknown
- 2026-02-23: MISSING
- 2026-02-24: MISSING

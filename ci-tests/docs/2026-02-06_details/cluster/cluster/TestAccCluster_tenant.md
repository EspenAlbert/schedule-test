# cluster/cluster/TestAccCluster_tenant Test Details
# Found 33 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 21) FAIL(x 7) SKIP(x 5)
Success rate: 75.00%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-15 00:29](#error-2026-01-15t0029380000) | CheckFailure for cluster.tenant at Step: 2 Checks: 4 | dev |  | 2258.09s
[2026-01-19 00:33](#error-2026-01-19t0033540000) | CheckFailure for cluster.tenant at Step: 2 Checks: 4 | dev |  | 2112.02s
[2026-01-28 00:32](#error-2026-01-28t0032380000) |  | dev |  | 2174.07s
[2026-01-31 00:35](#error-2026-01-31t0035140000) |  | dev | timeout | 11047.07s
[2026-02-02 00:38](#error-2026-02-02t0038370000) |  | dev | timeout | 11048.02s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 25 minutes
- 2026-01-09 PASS 31 minutes
- 2026-01-10 PASS 23 minutes
- 2026-01-11: MISSING
- 2026-01-12 PASS 30 minutes
- 2026-01-13 PASS 33 minutes
- 2026-01-14 PASS 28 minutes
- 2026-01-15

### Error 2026-01-15T00:29:38+00:00
```
2026-01-15T00:29:38.5465652Z === RUN   TestAccCluster_tenant
2026-01-15T00:29:38.5486124Z === CONT  TestAccCluster_tenant
2026-01-15T01:03:43.5428822Z === NAME  TestAccCluster_tenant
2026-01-15T01:03:43.5430620Z     resource_cluster_test.go:1027: Step 2/2 error: Check failed: Check 4/5 error: mongodbatlas_cluster.tenant: Attribute 'disk_size_gb' expected "10", got "5"
2026-01-15T01:07:17.4234489Z --- FAIL: TestAccCluster_tenant (2258.88s)
```

- 2026-01-16 PASS 28 minutes
- 2026-01-17 PASS 22 minutes
- 2026-01-18: MISSING
- 2026-01-19

### Error 2026-01-19T00:33:54+00:00
```
2026-01-19T00:33:54.5923362Z === RUN   TestAccCluster_tenant
2026-01-19T00:33:54.6099395Z === CONT  TestAccCluster_tenant
2026-01-19T01:08:05.6990122Z === NAME  TestAccCluster_tenant
2026-01-19T01:08:05.6991468Z     resource_cluster_test.go:1027: Step 2/2 error: Check failed: Check 4/5 error: mongodbatlas_cluster.tenant: Attribute 'disk_size_gb' expected "10", got "5"
2026-01-19T01:09:06.7690516Z --- FAIL: TestAccCluster_tenant (2112.16s)
```

- 2026-01-20 PASS 27 minutes
- 2026-01-21 PASS 30 minutes
- 2026-01-22 PASS 28 minutes
- 2026-01-23 PASS 30 minutes
- 2026-01-24 PASS 23 minutes
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

## QA Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-01-08 06:24](#error-2026-01-08t0624580000) | CheckFailure for cluster.tenant at Step: 2 Checks: 4 | qa | 2109.03s
[2026-01-11 00:34](#error-2026-01-11t0034310000) | CheckFailure for cluster.tenant at Step: 2 Checks: 4 | qa | 2110.07s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08

### Error 2026-01-08T06:24:58+00:00
```
2026-01-08T06:24:58.5443321Z === RUN   TestAccCluster_tenant
2026-01-08T06:24:58.5561775Z === CONT  TestAccCluster_tenant
2026-01-08T06:59:06.7780612Z === NAME  TestAccCluster_tenant
2026-01-08T06:59:06.7781661Z     resource_cluster_test.go:1027: Step 2/2 error: Check failed: Check 4/5 error: mongodbatlas_cluster.tenant: Attribute 'disk_size_gb' expected "10", got "5"
2026-01-08T07:00:07.8464191Z --- FAIL: TestAccCluster_tenant (2109.29s)
```

- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11

### Error 2026-01-11T00:34:31+00:00
```
2026-01-11T00:34:31.8733640Z === RUN   TestAccCluster_tenant
2026-01-11T00:34:31.8757315Z === CONT  TestAccCluster_tenant
2026-01-11T01:08:41.5847327Z === NAME  TestAccCluster_tenant
2026-01-11T01:08:41.5849018Z     resource_cluster_test.go:1027: Step 2/2 error: Check failed: Check 4/5 error: mongodbatlas_cluster.tenant: Attribute 'disk_size_gb' expected "10", got "5"
2026-01-11T01:09:42.5876026Z --- FAIL: TestAccCluster_tenant (2110.71s)
```

- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 22 minutes
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 22 minutes
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 30 minutes
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

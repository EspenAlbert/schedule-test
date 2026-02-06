# advanced_cluster/advancedcluster/TestAccMockableAdvancedCluster_symmetricSharded Test Details
# Found 33 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 26) FAIL(x 7)
Success rate: 78.79%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-14 00:33](#error-2026-01-14t0033010000) | OUT_OF_CAPACITY /api/atlas/v2/groups/6966e43edec294f0362bdb25/clusters | dev | out_of_capacity | 7.09s
[2026-01-29 00:36](#error-2026-01-29t0036340000) | OUT_OF_CAPACITY /api/atlas/v2/groups/697aab92f4a2a16d1a6955f7/clusters | dev | out_of_capacity | 7.10s
[2026-01-31 00:35](#error-2026-01-31t0035260000) | OUT_OF_CAPACITY /api/atlas/v2/groups/697d4e4a7d00588dcf9f5262/clusters | dev | out_of_capacity | 5.06s
[2026-02-02 00:38](#error-2026-02-02t0038540000) |  | dev | timeout | 10807.01s
[2026-02-03 00:39](#error-2026-02-03t0039360000) | OUT_OF_CAPACITY /api/atlas/v2/groups/698143c5b2e54ee99590d5b0/clusters | dev | out_of_capacity | 6.06s
[2026-02-05 00:39](#error-2026-02-05t0039040000) | OUT_OF_CAPACITY /api/atlas/v2/groups/6983e6a6304923ebd185c058/clusters | dev | out_of_capacity | 5.09s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 32 minutes
- 2026-01-09 PASS 33 minutes
- 2026-01-10 PASS 31 minutes
- 2026-01-11: MISSING
- 2026-01-12 PASS 33 minutes
- 2026-01-13 PASS 40 minutes
- 2026-01-14

### Error 2026-01-14T00:33:01+00:00
```
2026-01-14T00:33:01.9692021Z === RUN   TestAccMockableAdvancedCluster_symmetricSharded
2026-01-14T00:33:04.0510636Z     resource_test.go:669: Adding variable groupId=6966e43edec294f0362bdb25
2026-01-14T00:33:04.0512098Z     resource_test.go:669: Adding variable clusterName=test-acc-tf-c-5002612377370187474
2026-01-14T00:34:44.5813500Z === CONT  TestAccMockableAdvancedCluster_symmetricSharded
2026-01-14T00:34:50.2212752Z === NAME  TestAccMockableAdvancedCluster_symmetricSharded
2026-01-14T00:34:50.2213637Z     resource_test.go:669: Step 1/3 error: Error running apply: exit status 1
2026-01-14T00:34:50.2214289Z         
2026-01-14T00:34:50.2214727Z         Error: Error in create
2026-01-14T00:34:50.2215167Z         
2026-01-14T00:34:50.2215700Z           with mongodbatlas_advanced_cluster.test,
2026-01-14T00:34:50.2216668Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-01-14T00:34:50.2217551Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-01-14T00:34:50.2218039Z         
2026-01-14T00:34:50.2218678Z         cluster name: test-acc-tf-c-5002612377370187474, API error details:
2026-01-14T00:34:50.2220279Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6966e43edec294f0362bdb25/clusters
2026-01-14T00:34:50.2221551Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-01-14T00:34:50.2223200Z         region is currently out of capacity for the requested instance size. Reason:
2026-01-14T00:34:50.2518294Z         Conflict. Params: [], BadRequestDetail: 
2026-01-14T00:34:50.3854809Z --- FAIL: TestAccMockableAdvancedCluster_symmetricSharded (7.89s)
```

- 2026-01-15 PASS 38 minutes
- 2026-01-16 PASS 37 minutes
- 2026-01-17 PASS 36 minutes
- 2026-01-18: MISSING
- 2026-01-19 PASS 31 minutes
- 2026-01-20 PASS 32 minutes
- 2026-01-21 PASS 34 minutes
- 2026-01-22 PASS 37 minutes
- 2026-01-23 PASS 32 minutes
- 2026-01-24 PASS 31 minutes
- 2026-01-25: MISSING
- 2026-01-26 PASS 32 minutes
- 2026-01-27 PASS 34 minutes
- 2026-01-28 PASS 31 minutes
- 2026-01-29

### Error 2026-01-29T00:36:34+00:00
```
2026-01-29T00:36:34.1927121Z === RUN   TestAccMockableAdvancedCluster_symmetricSharded
2026-01-29T00:36:36.8749249Z     resource_test.go:669: Adding variable groupId=697aab92f4a2a16d1a6955f7
2026-01-29T00:36:36.8750147Z     resource_test.go:669: Adding variable clusterName=test-acc-tf-c-617484351552015226
2026-01-29T00:38:42.2008220Z === CONT  TestAccMockableAdvancedCluster_symmetricSharded
2026-01-29T00:38:47.4492484Z === NAME  TestAccMockableAdvancedCluster_symmetricSharded
2026-01-29T00:38:47.4493367Z     resource_test.go:669: Step 1/3 error: Error running apply: exit status 1
2026-01-29T00:38:47.4493891Z         
2026-01-29T00:38:47.4494160Z         Error: Error in create
2026-01-29T00:38:47.4494415Z         
2026-01-29T00:38:47.4494753Z           with mongodbatlas_advanced_cluster.test,
2026-01-29T00:38:47.4495427Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-01-29T00:38:47.4496330Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-01-29T00:38:47.4496665Z         
2026-01-29T00:38:47.4497090Z         cluster name: test-acc-tf-c-617484351552015226, API error details:
2026-01-29T00:38:47.4497784Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/697aab92f4a2a16d1a6955f7/clusters
2026-01-29T00:38:47.4498745Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-01-29T00:38:47.4499547Z         region is currently out of capacity for the requested instance size. Reason:
2026-01-29T00:38:47.4500069Z         Conflict. Params: [], BadRequestDetail: 
2026-01-29T00:38:47.4966328Z --- FAIL: TestAccMockableAdvancedCluster_symmetricSharded (7.98s)
```

- 2026-01-30 PASS 42 minutes
- 2026-01-31

### Error 2026-01-31T00:35:26+00:00
```
2026-01-31T00:35:26.6416397Z === RUN   TestAccMockableAdvancedCluster_symmetricSharded
2026-01-31T00:35:26.7106972Z     resource_test.go:628: Adding variable groupId=697d4e4a7d00588dcf9f5262
2026-01-31T00:35:26.7107929Z     resource_test.go:628: Adding variable clusterName=test-acc-tf-c-540947913009785860
2026-01-31T00:36:56.1578221Z === CONT  TestAccMockableAdvancedCluster_symmetricSharded
2026-01-31T00:37:01.6598714Z === NAME  TestAccMockableAdvancedCluster_symmetricSharded
2026-01-31T00:37:01.6599321Z     resource_test.go:628: Step 1/3 error: Error running apply: exit status 1
2026-01-31T00:37:01.6599805Z         
2026-01-31T00:37:01.6600083Z         Error: Error in create
2026-01-31T00:37:01.6600336Z         
2026-01-31T00:37:01.6600824Z           with mongodbatlas_advanced_cluster.test,
2026-01-31T00:37:01.6601623Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-01-31T00:37:01.6602396Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-01-31T00:37:01.6603172Z         
2026-01-31T00:37:01.6603805Z         cluster name: test-acc-tf-c-540947913009785860, API error details:
2026-01-31T00:37:01.6604545Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/697d4e4a7d00588dcf9f5262/clusters
2026-01-31T00:37:01.6605259Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-01-31T00:37:01.6605935Z         region is currently out of capacity for the requested instance size. Reason:
2026-01-31T00:37:01.6606451Z         Conflict. Params: [], BadRequestDetail: 
2026-01-31T00:37:01.7058650Z --- FAIL: TestAccMockableAdvancedCluster_symmetricSharded (5.62s)
```

- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T00:38:54+00:00
```
2026-02-02T00:38:54.4583196Z === RUN   TestAccMockableAdvancedCluster_symmetricSharded
2026-02-02T00:38:54.5391897Z     resource_test.go:628: Adding variable groupId=697ff21c71768356d7f8c603
2026-02-02T00:38:54.5393680Z     resource_test.go:628: Adding variable clusterName=test-acc-tf-c-789829550011363391
2026-02-02T00:40:19.8905085Z === CONT  TestAccMockableAdvancedCluster_symmetricSharded
2026-02-02T03:40:26.7102702Z === NAME  TestAccMockableAdvancedCluster_symmetricSharded
2026-02-02T03:40:26.7103717Z     resource_test.go:628: Step 1/3 error: Error running apply: exit status 1
2026-02-02T03:40:26.7104435Z         
2026-02-02T03:40:26.7104917Z         Error: Error in create
2026-02-02T03:40:26.7105354Z         
2026-02-02T03:40:26.7106537Z           with mongodbatlas_advanced_cluster.test,
2026-02-02T03:40:26.7107921Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-02T03:40:26.7109215Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-02T03:40:26.7109850Z         
2026-02-02T03:40:26.7110784Z         cluster=test-acc-tf-c-789829550011363391 didn't reach desired state: IDLE,
2026-02-02T03:40:26.7111753Z         error: context deadline exceeded
2026-02-02T03:40:26.7648223Z   
2026-02-02T03:40:26.9278329Z --- FAIL: TestAccMockableAdvancedCluster_symmetricSharded (10807.12s)
```

- 2026-02-03

### Error 2026-02-03T00:39:36+00:00
```
2026-02-03T00:39:36.1563522Z === RUN   TestAccMockableAdvancedCluster_symmetricSharded
2026-02-03T00:39:36.2419080Z     resource_test.go:628: Adding variable groupId=698143c5b2e54ee99590d5b0
2026-02-03T00:39:36.2420176Z     resource_test.go:628: Adding variable clusterName=test-acc-tf-c-7730072642315732439
2026-02-03T00:42:03.6692620Z === CONT  TestAccMockableAdvancedCluster_symmetricSharded
2026-02-03T00:42:09.7185231Z === NAME  TestAccMockableAdvancedCluster_symmetricSharded
2026-02-03T00:42:09.7186290Z     resource_test.go:628: Step 1/3 error: Error running apply: exit status 1
2026-02-03T00:42:09.7187016Z         
2026-02-03T00:42:09.7187497Z         Error: Error in create
2026-02-03T00:42:09.7187961Z         
2026-02-03T00:42:09.7188576Z           with mongodbatlas_advanced_cluster.test,
2026-02-03T00:42:09.7189953Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-03T00:42:09.7191045Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-03T00:42:09.7191619Z         
2026-02-03T00:42:09.7192687Z         cluster name: test-acc-tf-c-7730072642315732439, API error details:
2026-02-03T00:42:09.7193918Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143c5b2e54ee99590d5b0/clusters
2026-02-03T00:42:09.7195138Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-02-03T00:42:09.7196308Z         region is currently out of capacity for the requested instance size. Reason:
2026-02-03T00:42:09.7197231Z         Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:42:09.7716942Z   
2026-02-03T00:42:10.1684638Z --- FAIL: TestAccMockableAdvancedCluster_symmetricSharded (6.58s)
```

- 2026-02-04 PASS 57 minutes
- 2026-02-05

### Error 2026-02-05T00:39:04+00:00
```
2026-02-05T00:39:04.2197999Z === RUN   TestAccMockableAdvancedCluster_symmetricSharded
2026-02-05T00:39:04.2964292Z     resource_test.go:628: Adding variable groupId=6983e6a6304923ebd185c058
2026-02-05T00:39:04.2965003Z     resource_test.go:628: Adding variable clusterName=test-acc-tf-c-4399744607308675855
2026-02-05T00:40:26.2925098Z === CONT  TestAccMockableAdvancedCluster_symmetricSharded
2026-02-05T00:40:32.0023555Z === NAME  TestAccMockableAdvancedCluster_symmetricSharded
2026-02-05T00:40:32.0024249Z     resource_test.go:628: Step 1/3 error: Error running apply: exit status 1
2026-02-05T00:40:32.0024695Z         
2026-02-05T00:40:32.0024996Z         Error: Error in create
2026-02-05T00:40:32.0025326Z         
2026-02-05T00:40:32.0025670Z           with mongodbatlas_advanced_cluster.test,
2026-02-05T00:40:32.0026452Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-05T00:40:32.0027196Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-05T00:40:32.0027693Z         
2026-02-05T00:40:32.0028153Z         cluster name: test-acc-tf-c-4399744607308675855, API error details:
2026-02-05T00:40:32.0028856Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6983e6a6304923ebd185c058/clusters
2026-02-05T00:40:32.0029569Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-02-05T00:40:32.0030244Z         region is currently out of capacity for the requested instance size. Reason:
2026-02-05T00:40:32.0030776Z         Conflict. Params: [], BadRequestDetail: 
2026-02-05T00:40:32.0622477Z --- FAIL: TestAccMockableAdvancedCluster_symmetricSharded (5.90s)
```

- 2026-02-06 PASS 56 minutes

## QA Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-18 00:34](#error-2026-01-18t0034460000) | OUT_OF_CAPACITY /api/atlas/v2/groups/696c2aa7e81f574087ac5370/clusters | qa | out_of_capacity | 8.08s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 28 minutes
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 32 minutes
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18

### Error 2026-01-18T00:34:46+00:00
```
2026-01-18T00:34:46.8847332Z === RUN   TestAccMockableAdvancedCluster_symmetricSharded
2026-01-18T00:34:49.0736931Z     resource_test.go:669: Adding variable groupId=696c2aa7e81f574087ac5370
2026-01-18T00:34:49.0738271Z     resource_test.go:669: Adding variable clusterName=test-acc-tf-c-7791316972705616301
2026-01-18T00:36:19.7388252Z === CONT  TestAccMockableAdvancedCluster_symmetricSharded
2026-01-18T00:36:26.2439762Z === NAME  TestAccMockableAdvancedCluster_symmetricSharded
2026-01-18T00:36:26.2441000Z     resource_test.go:669: Step 1/3 error: Error running apply: exit status 1
2026-01-18T00:36:26.2441728Z         
2026-01-18T00:36:26.2442164Z         Error: Error in create
2026-01-18T00:36:26.2442587Z         
2026-01-18T00:36:26.2443152Z           with mongodbatlas_advanced_cluster.test,
2026-01-18T00:36:26.2444319Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-01-18T00:36:26.2445669Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-01-18T00:36:26.2446242Z         
2026-01-18T00:36:26.2447218Z         cluster name: test-acc-tf-c-7791316972705616301, API error details:
2026-01-18T00:36:26.2448420Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/696c2aa7e81f574087ac5370/clusters
2026-01-18T00:36:26.2449639Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-01-18T00:36:26.2450809Z         region is currently out of capacity for the requested instance size. Reason:
2026-01-18T00:36:26.2451709Z         Conflict. Params: [], BadRequestDetail: 
2026-01-18T00:36:26.3236802Z --- FAIL: TestAccMockableAdvancedCluster_symmetricSharded (8.80s)
```

- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 31 minutes
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 31 minutes
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 33 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 27 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING

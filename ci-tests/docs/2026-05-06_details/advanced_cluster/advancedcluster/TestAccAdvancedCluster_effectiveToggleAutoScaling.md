# advanced_cluster/advancedcluster/TestAccAdvancedCluster_effectiveToggleAutoScaling Test Details
# Found 33 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 31) FAIL(x 2)
Success rate: 93.94%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-16 00:51](#error-2026-04-16t0051150000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69e0326c8379397d109cbc5b/clusters | dev | out_of_capacity | 5.06s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 48 minutes
- 2026-04-08 PASS 20 minutes
- 2026-04-09 PASS 32 minutes
- 2026-04-10 PASS 33 minutes
- 2026-04-11 PASS 17 minutes
- 2026-04-12: MISSING
- 2026-04-13 PASS 24 minutes
- 2026-04-14 PASS 19 minutes
- 2026-04-15 PASS 23 minutes
- 2026-04-16

### Error 2026-04-16T00:51:15+00:00
```
2026-04-16T00:51:15.7580722Z === RUN   TestAccAdvancedCluster_effectiveToggleAutoScaling
2026-04-16T00:54:54.6678338Z === CONT  TestAccAdvancedCluster_effectiveToggleAutoScaling
2026-04-16T00:54:59.3882217Z === NAME  TestAccAdvancedCluster_effectiveToggleAutoScaling
2026-04-16T00:54:59.3883495Z     effective_fields_test.go:216: Step 1/3 error: Error running apply: exit status 1
2026-04-16T00:54:59.3885042Z         
2026-04-16T00:54:59.3885651Z         Error: Error in create
2026-04-16T00:54:59.3886246Z         
2026-04-16T00:54:59.3886984Z           with mongodbatlas_advanced_cluster.test,
2026-04-16T00:54:59.3905394Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-04-16T00:54:59.3922558Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-04-16T00:54:59.3923370Z         
2026-04-16T00:54:59.3924569Z         cluster name: test-acc-tf-c-6443693855204265940, API error details:
2026-04-16T00:54:59.3926071Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e0326c8379397d109cbc5b/clusters
2026-04-16T00:54:59.3927568Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-04-16T00:54:59.3929703Z         region is currently out of capacity for the requested instance size. Reason:
2026-04-16T00:54:59.3930848Z         Conflict. Params: [], BadRequestDetail: 
2026-04-16T00:54:59.6703999Z --- FAIL: TestAccAdvancedCluster_effectiveToggleAutoScaling (5.57s)
```

- 2026-04-17 PASS 22 minutes
- 2026-04-18 PASS 34 minutes
- 2026-04-19: MISSING
- 2026-04-20: MISSING
- 2026-04-21 PASS 29 minutes
- 2026-04-22 PASS 40 minutes
- 2026-04-23 PASS 38 minutes
- 2026-04-24 PASS 20 minutes
- 2026-04-25 PASS 22 minutes
- 2026-04-26: MISSING
- 2026-04-27 PASS 21 minutes
- 2026-04-28 PASS 22 minutes
- 2026-04-29 PASS 24 minutes
- 2026-04-30 PASS 29 minutes
- 2026-05-01 PASS 23 minutes
- 2026-05-02 PASS 21 minutes
- 2026-05-03: MISSING
- 2026-05-04 PASS 21 minutes
- 2026-05-05 PASS 39 minutes
- 2026-05-06 PASS 29 minutes

## QA Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-12 00:48](#error-2026-04-12t0048070000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69daebc497e3b71a70661420/clusters | qa | out_of_capacity | 6.02s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08
  - PASS 21 minutes
  - PASS 18 minutes
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12

### Error 2026-04-12T00:48:07+00:00
```
2026-04-12T00:48:07.4872706Z === RUN   TestAccAdvancedCluster_effectiveToggleAutoScaling
2026-04-12T00:50:48.2963938Z === CONT  TestAccAdvancedCluster_effectiveToggleAutoScaling
2026-04-12T00:50:53.8250638Z === NAME  TestAccAdvancedCluster_effectiveToggleAutoScaling
2026-04-12T00:50:53.8252138Z     effective_fields_test.go:216: Step 1/3 error: Error running apply: exit status 1
2026-04-12T00:50:53.8252994Z         
2026-04-12T00:50:53.8253572Z         Error: Error in create
2026-04-12T00:50:53.8254109Z         
2026-04-12T00:50:53.8254844Z           with mongodbatlas_advanced_cluster.test,
2026-04-12T00:50:53.8256304Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-04-12T00:50:53.8257746Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-04-12T00:50:53.8258504Z         
2026-04-12T00:50:53.8259583Z         cluster name: test-acc-tf-c-5941598061761200946, API error details:
2026-04-12T00:50:53.8261068Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/69daebc497e3b71a70661420/clusters
2026-04-12T00:50:53.8262507Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-04-12T00:50:53.8263761Z         region is currently out of capacity for the requested instance size. Reason:
2026-04-12T00:50:53.8264776Z         Conflict. Params: [], BadRequestDetail: 
2026-04-12T00:50:53.8693548Z    test_terraform_path=/home/runner/work/_temp/29f79c9f-fb03-42ee-a2bd-e8ecd9a94dbd/terraform test_name=TestAccAdvancedCluster_tls13CustomCiphers
2026-04-12T00:50:53.9118861Z --- FAIL: TestAccAdvancedCluster_effectiveToggleAutoScaling (6.24s)
```

- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19: MISSING
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 20 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 25 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 21 minutes
- 2026-05-04 PASS 19 minutes
- 2026-05-05: MISSING
- 2026-05-06 PASS 20 minutes

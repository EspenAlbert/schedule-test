# network/networkcontainer/TestAccNetworkContainer_basicAWS Test Details
# Found 35 TestRuns in dev, qa from 2026-01-26 to 2026-02-24 from master branch: 1 unique tests, PASS(x 34) FAIL
Success rate: 97.14%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-02-03 00:43](#error-2026-02-03t0043220000) | NO_CAPACITY /api/atlas/v2/groups/698143afb2e54ee9958fec23/containers | dev | 3.03s

### Timeline
- 2026-01-25: MISSING
- 2026-01-26 PASS 2 minutes
- 2026-01-27 PASS 2 minutes
- 2026-01-28 PASS 2 minutes
- 2026-01-29 PASS 2 minutes
- 2026-01-30 PASS 2 minutes
- 2026-01-31 PASS 2 minutes
- 2026-02-01: MISSING
- 2026-02-02 PASS 2 minutes
- 2026-02-03

### Error 2026-02-03T00:43:22+00:00
```
2026-02-03T00:43:22.1539426Z === RUN   TestAccNetworkContainer_basicAWS
2026-02-03T00:43:22.1540949Z     resource_network_container_test.go:24: Creating execution project (1): test-acc-tf-p-8371773204632260461
2026-02-03T00:43:22.1565755Z === CONT  TestAccNetworkContainer_basicAWS
2026-02-03T00:43:22.1579683Z === NAME  TestAccNetworkContainer_basicAWS
2026-02-03T00:43:22.1580281Z     resource_network_container_test.go:31: Step 1/3 error: Error running apply: exit status 1
2026-02-03T00:43:22.1580756Z         
2026-02-03T00:43:22.1582849Z         Error: error creating MongoDB Network Peering Container: https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143afb2e54ee9958fec23/containers POST: HTTP 409 Conflict (Error code: "NO_CAPACITY") Detail: Cannot find the AWS capacity for group 698143afb2e54ee9958fec23. Reason: Conflict. Params: [AWS 698143afb2e54ee9958fec23], BadRequestDetail: 
2026-02-03T00:43:22.1584208Z         
2026-02-03T00:43:22.1584577Z           with mongodbatlas_network_container.test,
2026-02-03T00:43:22.1585298Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_network_container" "test":
2026-02-03T00:43:22.1585980Z           12: 		resource "mongodbatlas_network_container" "test" {
2026-02-03T00:43:22.1586330Z         
2026-02-03T00:43:22.1598486Z    test_terraform_path=/home/runner/work/_temp/ebd67da4-db6a-45b7-973f-46e1534798c5/terraform test_working_directory=/tmp/plugintest1029568758 test_step_number=1 test_name=TestAccNetworkContainer_basicAzure
2026-02-03T00:43:22.1606408Z --- FAIL: TestAccNetworkContainer_basicAWS (3.27s)
```

- 2026-02-04 PASS 2 minutes
- 2026-02-05 PASS 2 minutes
- 2026-02-06 PASS 2 minutes
- 2026-02-07 PASS 2 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 2 minutes
- 2026-02-10 PASS 2 minutes
- 2026-02-11 PASS 2 minutes
- 2026-02-12 PASS 2 minutes
- 2026-02-13 PASS 2 minutes
- 2026-02-14 PASS 2 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 2 minutes
- 2026-02-17
  - PASS 2 minutes
  - PASS 2 minutes
  - PASS 2 minutes
- 2026-02-18 PASS 2 minutes
- 2026-02-19 PASS 2 minutes
- 2026-02-20 PASS 2 minutes
- 2026-02-21 PASS 2 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 2 minutes
- 2026-02-24 PASS 2 minutes

## QA Environment
### Timeline
- 2026-01-25: MISSING
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 2 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 2 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 2 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 2 minutes
- 2026-02-16: MISSING
- 2026-02-17
  - PASS 2 minutes
  - PASS 2 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 2 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING

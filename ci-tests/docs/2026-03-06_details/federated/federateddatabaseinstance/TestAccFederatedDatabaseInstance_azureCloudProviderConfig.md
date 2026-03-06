# federated/federateddatabaseinstance/TestAccFederatedDatabaseInstance_azureCloudProviderConfig Test Details
# Found 33 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 32) FAIL
Success rate: 96.97%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-02-19 01:07](#error-2026-02-19t0107530000) |  | dev | 0.06s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05 PASS 14 seconds
- 2026-02-06 PASS 10 seconds
- 2026-02-07 PASS 20 seconds
- 2026-02-08: MISSING
- 2026-02-09 PASS 11 seconds
- 2026-02-10 PASS 11 seconds
- 2026-02-11 PASS 12 seconds
- 2026-02-12 PASS 15 seconds
- 2026-02-13 PASS 12 seconds
- 2026-02-14 PASS 13 seconds
- 2026-02-15: MISSING
- 2026-02-16 PASS 13 seconds
- 2026-02-17 PASS 14 seconds
- 2026-02-18 PASS 12 seconds
- 2026-02-19

### Error 2026-02-19T01:07:53+00:00
```
2026-02-19T01:07:53.0104195Z === RUN   TestAccFederatedDatabaseInstance_azureCloudProviderConfig
2026-02-19T01:07:53.0105754Z     resource_federated_database_instance_test.go:109: Creating execution project (1): test-acc-tf-p-7849820395002713806
2026-02-19T01:07:53.0106472Z     resource_federated_database_instance_test.go:109: 
2026-02-19T01:07:53.0107510Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-02-19T01:07:53.0109323Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-02-19T01:07:53.0111435Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-02-19T01:07:53.0113656Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/federateddatabaseinstance/resource_federated_database_instance_test.go:109
2026-02-19T01:07:53.0114614Z         	Error:      	Received unexpected error:
2026-02-19T01:07:53.0115405Z         	            	Post "https://cloud-dev.mongodb.com/api/atlas/v2/groups": EOF
2026-02-19T01:07:53.0116075Z         	Test:       	TestAccFederatedDatabaseInstance_azureCloudProviderConfig
2026-02-19T01:07:53.0117151Z         	Messages:   	Project creation failed: test-acc-tf-p-7849820395002713806, err: Post "https://cloud-dev.mongodb.com/api/atlas/v2/groups": EOF
2026-02-19T01:07:53.0117920Z --- FAIL: TestAccFederatedDatabaseInstance_azureCloudProviderConfig (0.58s)
```

- 2026-02-20 PASS 13 seconds
- 2026-02-21 PASS 13 seconds
- 2026-02-22: MISSING
- 2026-02-23 PASS 13 seconds
- 2026-02-24 PASS 14 seconds
- 2026-02-25 PASS 14 seconds
- 2026-02-26 PASS 14 seconds
- 2026-02-27 PASS 13 seconds
- 2026-02-28 PASS 14 seconds
- 2026-03-01: MISSING
- 2026-03-02 PASS 11 seconds
- 2026-03-03 PASS 13 seconds
- 2026-03-04 PASS 13 seconds
- 2026-03-05 PASS 44 seconds
- 2026-03-06 PASS 13 seconds

## QA Environment
### Timeline
- 2026-02-04 PASS 16 seconds
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 12 seconds
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 13 seconds
- 2026-02-16: MISSING
- 2026-02-17 PASS 22 seconds
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 12 seconds
- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 9 seconds
- 2026-03-02: MISSING
- 2026-03-03 PASS 8 seconds
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
